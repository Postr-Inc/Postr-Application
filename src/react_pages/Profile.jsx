import { api } from ".";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import * as sanitizeHtml from "sanitize-html";

api.autoCancellation(false);
import Modal from "../components/Modal";
import Bottomnav from "../components/Bottomnav";
import Post from "../components/Post";
import { useEffect, useState } from "react";

export default function Profile(props) {
  console.log("rerender");
  let [profile, setProfile] = useState({});
  let [posts, setPosts] = useState([]);
  let [followers, setFollowers] = useState(
    profile.followers ? profile.followers : []
  );
  let [hasRequested, setHasRequested] = useState(false);
  let [pageSelected, setPageSelected] = useState("posts");
  let [hasMore, setHasMore] = useState(true);
  let [edited, setedited] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  function follow() {
    if (followers.includes(api.authStore.model.id)) {
      let index = followers.indexOf(api.authStore.model.id);
      followers.splice(index, 1);
      setFollowers([...followers]);
      api.collection("users").update(profile.id, {
        followers: followers,
      });
    } else {
      setFollowers([...followers, api.authStore.model.id]);
      api.collection("users").update(profile.id, {
        followers: [...followers, api.authStore.model.id],
      });
      api.collection("notifications").create({
        recipient:  profile.id,
        author: api.authStore.model.id,
        type: "follow",
        title: `${api.authStore.model.username} followed you`,
        image: `https://postrapi.pockethost.io/api/files/_pb_users_auth_/${api.authStore.model.id}/${api.authStore.model.avatar}`,
        url: `/u/${api.authStore.model.username}`,
        notification_title: `${api.authStore.model.username} followed you`,
        notification_body: `Open Postr to see more`
      });
    }
  }
  function fetchPosts(page) {
    return api
      .collection("posts")
      .getList(page, 10, {
        filter: `author.username="${props.user}"`,
        expand: "author",
        sort: "-pinned, -created",
      })
      .then((res) => {
        return {
          items: res.items,
          totalPages: res.totalPages,
          totalItems: res.totalItems,
        };
      });
  }

  useEffect(() => {
    api
      .collection("users")
      .getFirstListItem(`username="${props.user}"`)
      .then((res) => {
        if(res.deactivated){
          let profile = {
            username: "User not found",
            bio: "",
            avatar: "",
            followers: [],
            Isprivate: true,
            $dead: true
          }
          setProfile(profile);
          return
        }
        setProfile(res);
        setFollowers(res.followers ? res.followers : []);
      });
    if (
      (profile.followers &&
        profile.followers.includes(api.authStore.model.id) &&
        profile.Isprivate) ||
      !profile.Isprivate && !profile.deactivated
    ) {
      fetchPosts(1).then(function (fetchedPosts) {
        setPosts(fetchedPosts.items);
        setTotalPages(fetchedPosts.totalPages);
      });
    }
  }, [props.user]);

  let [page, setPage] = useState(1);
  useEffect(() => {
    fetchPosts(1).then((fetchedPosts) => {
      setPosts(fetchedPosts.items);
      setTotalPages(fetchedPosts.totalPages);
    });
  }, []);

  function fetchMorePosts() {
    if (page >= totalPages) {
      setHasMore(false);
    } else {
      const nextPage = page + 1;
      fetchPosts(nextPage).then((fetchedPosts) => {
        setPage(nextPage);
        setPosts([...posts, ...fetchedPosts.items]);
      });
    }
  }

  function edit() {
    console.log(edited);
    let form = new FormData();
    form.append("username",  edited.username ? edited.username : profile.username);
    form.append("bio",  edited.bio ? edited.bio : profile.bio);
    form.append("Isprivate", edited.Isprivate ? edited.Isprivate : profile.Isprivate);
    form.append("avatar",  edited.avatar ? edited.avatar : profile.avatar);
    api
      .collection("users")
      .update(profile.id, form)
      .then((res) => {
        setProfile(res);
        window.location.href = `/u/${res.username}`;
      }).catch((e) => {
        alert(e)
      })
    document.getElementById("editprofile").close();
  }

  return (
    <>
      <div className="  flex flex-row justify-between
       p-5
      "
       style={{fontFamily: 'Inter !important'}}
      >
        <span
            className="flex flex-row items-center gap-2 cursor-pointer
           
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => {
                window.history.back();
              }}
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          
          </span>
        <span className="text-xl " style={{fontFamily: 'pacifico'}}>{profile.username ? '@' + profile.username : "Loading..."}</span>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            if (
              window.location.pathname ===
              "/u/" + api.authStore.model.username
            ) {
              window.location.href = "/settings";
            } else {
              window.options.showModal();
            }
          }}
        >
          •••
        </div>
        
      </div>

      
      <div className="flex flex-col   p-5 gap-2"
      >
        <div className="flex flex-row  justify-between gap-5">
          <div className="flex flex-col gap-2s">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">{profile.username ? profile.username : "Loading..."}</h1>
              
            </div>
            <span
              className="text-gray-500 
      w-[80vw] max-w-[80vw]  
      "  
            >
              {profile.bio ? profile.bio : ""}
            </span>
            <span className="text-gray-500 text-sm ">
              Followed by {followers ? followers.length : 0}{" "}
              {followers.length === 1 ? "person" : "people"}
            </span>
          </div>
          <div className="indicator  absolute  end-5">
            {profile.avatar ? (
              <img
                src={`https://postrapi.pockethost.io/api/files/_pb_users_auth_/${profile.id}/${profile.avatar}`}
                alt="Avatar"
                className="w-16 h-16 rounded-full  avatar"
              />
            ) : (
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content  border-slate-200 rounded-full w-16">
                  <span className="text-lg">
                    {profile.username
                      ? profile.username.charAt(0).toUpperCase()
                      : ""}
                  </span>
                </div>
              </div>
            )}

            {profile.validVerified ? (
            <span className="">
                 <img
                src="/icons/verified.png"
                className="w-5 h-5 absolute border-white border-1 bg-white  bottom-0  left-0
          rounded-full
           
          "
              />
            </span>
            ) :  <></>
            }
          </div>
        </div>

        <div>
           {
            profile.$dead ===  undefined ? <div className="flex flex-row gap-5 w-[42vw] mt-8">
            {props.user === api.authStore.model.username ? (
              <>
                <button
                  className="bg-[#121212] w-full btn btn-sm  h-text-sm text-white rounded-md  "
                  onClick={() => {
                    document.getElementById("editprofile").showModal();
                  }}
                >
                  Edit Profile
                </button>
                <button
                  className="btn btn-sm btn-ghost w-full border-slate-400 text-[#121212] rounded-md "
                  onClick={() => {
                    navigator.share({
                      title: `Follow ${profile.username} on Postr!`,
                      text: profile.bio,
                      url: window.location.href,
                    });
                  }}
                >
                  Share
                </button>
              </>
            ) : (
              <>
                {profile.Isprivate &&
                !followers.includes(api.authStore.model.id) ? (
                  <>
                    <button
                      className={`${
                        hasRequested
                          ? "text-[#12121212] btn-ghost border-slate-400"
                          : "bg-[#121212] text-white"
                      } w-full btn btn-sm   rounded-md  `}
                      onClick={() => {
                        alert("Request sent!");
                      }}
                    >
                      {hasRequested ? "Requested" : "Request Access"}
                    </button>
                    <button
                      className="btn btn-sm btn-ghost w-full border-slate-400 text-[#121212] rounded-md "
                      onClick={() => {
                        window.newpost.showModal();
                        document.getElementById(
                          "post"
                        ).innerHTML = `<a class="text-sky-500" href="#/profile/${profile.id}">u/${profile.username}<a/>`;
                      }}
                    >
                      Mention
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={`${
                        followers && followers.includes(api.authStore.model.id)
                          ? "text-[#121212] btn-ghost border-slate-400"
                          : "bg-[#121212] text-white"
                      } w-full btn btn-sm   rounded-md  `}
                      onClick={debounce(follow, 1000)}
                    >
                      {followers && followers.includes(api.authStore.model.id)
                        ? "Unfollow"
                        : "Follow"}
                    </button>
                    <button
                      className="btn btn-sm btn-ghost w-full border-slate-400 text-[#121212] rounded-md "
                      onClick={() => {
                        window.newpost.showModal();
                        document.getElementById(
                          "post"
                        ).innerHTML = `<a class="text-sky-500" href="#/profile/${profile.id}">u/${profile.username}<a/>`;
                      }}
                    >
                      Mention
                    </button>
                  </>
                )}
              </>
            )}
          </div>
          : <></>
           }
       
        </div>
        <div
        className=" font-medium p-2 flex flex-row justify-between mt-6 "
        style={{ fontFamily: "Inter", fontSize: "14px" }}
      >
        <a
          className={`
         cursor-pointer
         text-lg  ${
           pageSelected === "posts" ? "underline underline-offset-[10px]" : ""
         }`}
          onClick={() => {
            if (pageSelected !== "posts") {
              setPageSelected("posts");
            }
          }}
        >
         Postrs
        </a>
        <a
          onClick={() => {
            if (pageSelected !== "replies") {
              setPageSelected("replies");
            }
          }}
          className={`
         cursor-pointer
         text-lg  ${
           pageSelected === "replies"
             ? "underline underline-offset-[10px]"
             : ""
         }`}
        >
        Replies
        </a>
        <a
          onClick={() => {
            if (pageSelected !== "collections") {
              setPageSelected("collections");
            }
          }}
          className={`
             cursor-pointer
          text-lg ${
            pageSelected === "collections" ? "underline underline-offset-[10px]" : ""
          } `}
        >
          Collections
        </a>
        <a
          onClick={() => {
            if (pageSelected !==  "likes") {
              setPageSelected("likes");
            }
          }}
          className={`
             cursor-pointer
          text-lg ${
            pageSelected === "likes" ? "underline underline-offset-[10px]" : ""
          } `}
        >
          Likes
        </a>
      </div>
         
      

        <div className="flex flex-col gap-5 mt-12">
          {profile.followers &&
          !profile.followers.includes(api.authStore.model.id) &&
          profile.$dead === true &&
          profile.Isprivate ? (
            <div className="flex flex-col justify-center  items-center mx-auto mt-8 gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>

              <h1 className="text-xl mt-2">{
                profile.$dead ? "This account is deactivated" : "This account is private"
}</h1>
            </div>
          ) : (
            <InfiniteScroll
              dataLength={posts.length}
              next={fetchMorePosts}
              hasMore={hasMore}
            >
              {posts.length < 1 ? (
                <div className=" gap-8 flex flex-col">
                  <Loading />
                  <Loading />
                  <Loading />
                </div>
              ) : (
                // Display posts when there are posts
                <div>
                  {posts.map((p) => {
                    let id = Math.random() * 100000000000000000;

                    if(p.file && p.expand.author){
                      let preload = document.createElement("link");
                      preload.href = `https://postrapi.pockethost.io/api/files/w5qr8xrcpxalcx6/${p.id}/${p.file}`;
                      preload.rel = "preload";
                      preload.as = "image";
                      document.head.appendChild(preload);
                    }
                    return (
                      <div key={id} className="mb-16">
                        <Post
                          content={p.content}
                          author={p.expand.author}
                          file={p.file}
                          likes={p.likes}
                          id={p.id}
                          created={p.created}
                          ondelete={() => {
                            window["delete" + id].showModal();
                          }}
                          comments={p.comments}
                          pinned={p.pinned}
                        />
                        {/**
                         * @Modal
                         * @name: delete
                         * @description: Allows the user to delete a post that pertains to them
                         * @function: delete{props.id}
                         *
                         */}
                        <Modal id={"delete" + id} height="h-96">
                          <button className="flex justify-center mx-auto focus:outline-none">
                            <div className="divider  text-slate-400  w-12   mt-0"></div>
                          </button>
                          <div className="flex-col text-sm mt-8 flex">
                            <div className="form-control w-full ">
                              <label className="label flex text-lg flex-row">
                                Please confirm that you want to delete this post
                                - this action cannot be undone.
                              </label>
                            </div>
                            <div className="flex flex-row gap-5 mt-5">
                              <a
                                onClick={() => {
                                  document
                                    .getElementById("delete" + id)
                                    .close();
                                }}
                                className="absolute bottom-12 cursor-pointer text-sky-500 text-sm left-5"
                              >
                                Cancel
                              </a>
                              {/* The delete action should only be available when the post exists */}
                              {posts.includes(p) && (
                                <a
                                  onClick={debounce(() => {
                                    api.collection("posts").delete(p.id);
                                    let index = posts.indexOf(p);
                                    posts.splice(index, 1);
                                    setPosts([...posts]);
                                    document
                                      .getElementById("delete" + id)
                                      .close();
                                  }, 1000)}
                                  className="absolute bottom-12 text-sky-500 cursor-pointer text-sm end-5"
                                >
                                  Delete
                                </a>
                              )}
                            </div>
                          </div>
                        </Modal>
                       
                      </div>
                    );
                  })}
                </div>
              )}
            </InfiniteScroll>
          )}
        </div>
      </div>
      
      <Modal id="editprofile" height="h-screen">
        <button className="flex justify-center mx-auto focus:outline-none">
          <div className="divider  text-slate-400  w-12   mt-0"></div>
        </button>
        <div className="flex-col text-sm mt-8 flex">
          <div className="form-control w-full ">
            <label className="label flex flex-row">
              <span className="label-text font-bold text-sm">Name</span>
              <label htmlFor="profileinput">
                <img
                  src={`https://postrapi.pockethost.io/api/files/_pb_users_auth_/${profile.id}/${profile.avatar}`}
                  id="profilepicin"
                  className="rounded-full w-12 h-12 absolute end-5 "
                  alt="Avatar"
                />
              </label>

              <input
                type="file"
                className="hidden"
                id="profileinput"
                accept="image/*"
                onChange={(e) => {
                  setedited({ ...edited, avatar: e.target.files[0] });
                  document.getElementById("profilepicin").src = URL.createObjectURL(
                    e.target.files[0]
                  );
                  e.target.value = "";
                }}
              />
            </label>
            <input
              type="text"
              placeholder={profile.username}
              className="border-t-0 p-2 border-r-0 border-l-0 border-b-2 border-slate-300   focus:outline-none focus:ring-0"
              onChange={(e) => {
                let val = sanitizeHtml(e.target.value, {
                  allowedTags: [],
                  allowedAttributes: {},
                });

                if (val.length < 20) {
                  setedited({ ...edited, username: val });
                }
                
              }}
              name="username"
            />
            <label className="label mt-5">
              <span className="label-text font-bold text-sm">Bio</span>
            </label>
            <input
              type="text"
              placeholder={profile.bio}
              className="border-t-0 p-2 border-r-0 border-l-0 border-b-2 border-slate-300   focus:outline-none focus:ring-0"
              onChange={(e) => {
                let val = sanitizeHtml(e.target.value, {
                  allowedTags: [],
                  allowedAttributes: {},
                });

                if (val.length < 100) {
                  setedited({ ...edited, bio: val });
                } else if (val.length > 100) {
                  alert("Bio cannot be more than 100 characters");
                } else {
                  setedited({ ...edited, bio: val });
                }
                setedited({ ...edited, bio: val });
              }}
            />
            <div className="form-control   mt-5">
              <label className="label cursor-pointer">
                <span className="label-text">Private Profile</span>
                <input
                  type="checkbox"
                  className="toggle"
                  checked={profile.Isprivate ? true : false}
                  onChange={(e) => {
                    setedited({ ...edited, Isprivate: e.target.checked });
                  }}
                />
              </label>
            </div>
          </div>
          <div className="absolute bottom-12 flex flex-row gap-5  ">
            <a
              onClick={edit}
              className="  text-sky-500 text-sm end-5 cusor-pointer"
            >
              Done
            </a>
          </div>
        </div>
      </Modal>
      <div className="mt-8">
        <Bottomnav />
      </div>
    </>
  );
}
function debounce(fn, time) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn();
    }, time);
  };
}
