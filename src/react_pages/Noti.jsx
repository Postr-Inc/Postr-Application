import Bottomnav from "../components/Bottomnav";
import { useEffect, useRef, useState } from "react";
import { api } from ".";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";
function getNotifications(page) {
  return api
    .collection("notifications")
    .getList(page, 10, {
      filter: `recipient.id = "${api.authStore.model.id}"`,
      expand: "author, post.author",
      sort: "-created",
    })
    .then((res) => {
      return {
        items: res.items,
        totalPages: res.totalPages,
        totalItems: res.totalItems,
      };
    });
}
export default function Noti() {
  let [currPage, setCurrPage] = useState("All"); // All, Likes, Comments, Mentions
  let [page, setPage] = useState(1);
  let [hasMore, setHasMore] = useState(true);
  let [notifications, setNotifications] = useState([]);
  let [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    getNotifications(1).then((res) => {
      setNotifications(res.items);
      setTotalPages(res.totalPages);
    });
  }, []);

  function getMoreNotifications() {
    if (Number(page) >= Number(totalPages)) {
      setHasMore(false);
      return;
    } else {
      const nextPage = Number(page) + 1;
      getNotifications(nextPage).then((res) => {
        setPage(nextPage);
        setNotifications([...notifications, ...res.items]);
        setTotalPages(res.totalPages);
      });
    }
  }
   // make sure their arent duplicates like - liked the same post twice
  notifications = notifications.filter((noti, index, self) => {
    return self.findIndex((n) => {
      if(n.expand && n.expand.post && noti.expand && noti.expand.post && n.expand.author && noti.expand.author){
        return n.expand.author && n.expand.author.id === noti.expand.author.id && n.type === noti.type && n.expand.post && n.expand.post.id === noti.expand.post.id
      }

    }) === index;
  })
  return (
    <div className="p-5  mb-6 ">
      <div className="flex justify-between items-center">
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
        <h1 className="text-2xl  " style={{ fontFamily: "Inter" }}>
          Notifications
        </h1>
        <div className="flex justify-between flex-row gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              if (window.location.pathname !== "/settings") {
                window.location.pathname = "/settings";
              }
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>{" "}
      </div>

      <InfiniteScroll
        dataLength={notifications.length}
        next={getMoreNotifications}
        hasMore={hasMore}
        loader={<Loading />}
        className="flex flex-col gap-5   mb-16 mt-12"
      >
        {notifications.map((noti) => {
          
          console.log(noti.type)
          return <div className="flex flex-col gap-2"
          key={noti.id}
          >
            <div className="flex flex-row gap-2">
            <img src={`
            https://postrapi.pockethost.io/api/files/_pb_users_auth_/${noti.author}/${noti.expand.author.avatar}`} className="w-10 h-10 rounded-full" />
             <div className="flex flex-col gap-1">
             <span className="text-sm   cursor-pointer"
             onClick={()=>{
                window.location.pathname = `/u/${noti.expand.author.username}`
             }}
             >@{noti.expand.author.username}</span>
             <div className="flex flex-row gap-2 mt-2 mb-2 ">
            
             {
              noti.type === 'like' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
              className="w-6 text-yellow-500 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
              :   noti.type === 'comment' ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
</svg>

              
              : ""
             }
              
             {
               noti.type === "like" ? <span className="text-sm">liked your post</span> : noti.type === "comment" ? <span className="text-sm">commented on your post</span> : <span className="text-sm">mentioned you in a comment</span>
               || noti.type === "comment_like" ? <span className="text-sm">{noti.title}</span> : ""
             }

             {
              noti.expand.post && noti.expand.post.file ? 
              <img 
              onClick={()=>{
                window.location.pathname = `/p/${noti.expand.post.id}`
              }}

              src={`https://postrapi.pockethost.io/api/files/w5qr8xrcpxalcx6/${noti.expand.post.id}/${noti.expand.post.file}`} 
              
              className="w-10 h-10 cursor-pointer rounded absolute end-5" />
              : ""
             }
             </div>
             <div className="text-sm absolute end-5 flex flex-row gap-5">
             <span className="text-sm ">{parseDate(noti.created)}</span>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 cursor-pointer h-5 mx-"
              onClick={()=>{
                api.collection("notifications").delete(noti.id).then(()=>{
                  setNotifications(notifications.filter((n)=>{
                    return n.id !== noti.id
                  }))
                })
              }}
             >
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
</svg>

             </div>
              <span
              className="cursor-pointer  text-sm"
              onClick={()=>{
                window.location.pathname = `/p/${noti.expand.post.id}`
              }}
              ref={(el)=>{
                if(el && noti.expand && noti.expand.post){
                  el.innerHTML = noti.expand.post.content || noti.body
                }
              }}
              ></span>
             </div>
              
            </div>
          
          <div className="divider opacity-50 mt-0 h-0"></div>
          </div>
        })}
      </InfiniteScroll>

      <div className="mt-8">
        <Bottomnav />
      </div>
    </div>
  );
}

function parseDate(data) {
  const date = new Date(data);
  const now = new Date();
  const diff = now - date;
  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30.44; // An average month length in days
  const years = months / 12;

  if (seconds < 60) {
    return "just now";
  }
  if (minutes < 60) {
    return Math.round(minutes) + "m";
  }
  if (hours < 24) {
    return Math.round(hours) + "h";
  }
  if (days < 7) {
    return Math.round(days) + "d";
  }
  if (weeks < 4) {
    return Math.round(weeks) + "w";
  }
  if (months < 12) {
    return Math.round(months) + "m";
  }
  if (years >= 1) {
    return Math.round(years) + "y";
  }
}
