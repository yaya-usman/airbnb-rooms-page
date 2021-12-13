export interface IReviews {
  id: number;
  name?: string;
  nameAval?: boolean;
  pfpAval?: boolean;
  pfpSrc?: string;
  comment: string;
  date: string;
}

export const reviewComments: IReviews[] = [
  {
    id: 1,
    nameAval: true,
    name: "Saeed",
    pfpAval: false,
    comment: "Perfect",
    date: "November 2021",
  },
  {
    id: 2,
    nameAval: true,
    name: "Mahmood",
    pfpAval: true,
    pfpSrc: "https://a0.muscache.com/im/pictures/user/9deb2d93-7842-4dc3-bf4f-504ed3a55b3e.jpg?im_w=240",
    comment: "Awesome place, fantastic view, around 10 minutes away from sapanca lake.",
    date: "September 2021",
  },
  {
    id: 3,
    nameAval: true,
    name: "Abdourahmane",
    pfpAval: true,
    pfpSrc: "https://a0.muscache.com/im/pictures/user/97603dd4-59f6-4934-99f4-28a10470a791.jpg?im_w=240",
    comment: `The place was very nice, calm and cosy.
    It was all we wanted.
    Thank you Oguzhan`,
    date: "August 2021",
  },
  {
    id: 4,
    nameAval: true,
    name: "Liliana",
    pfpAval: true,
    pfpSrc: "https://a0.muscache.com/im/pictures/user/1be2b2c7-da37-41f2-adf2-8752c51a1085.jpg?im_w=240",
    comment: `Really relaxing stay. Difficult communication (we used (Hidden by Airbnb) translator to communicate) but the host helped us with everything we needed`,
    date: "October 2021",
  },
  {
    id: 5,
    nameAval: true,
    name: "Mert",
    pfpAval: true,
    pfpSrc: "https://a0.muscache.com/im/pictures/user/ed822d04-1754-43b5-8522-acb57d49364c.jpg?im_w=240",
    comment: `10/10`,
    date: "September 2021",
  },
  {
    id: 6,
    nameAval: true,
    name: "Abdo",
    pfpAval: true,
    pfpSrc: "https://a0.muscache.com/im/pictures/user/ef03c173-6d71-4678-97dc-ecfb33007888.jpg?im_w=240",
    comment: `Lovely place m, amazing views, we enjoyed being close to nature and eating cherries of the tree. Thanks Oguzhan.`,
    date: "June 2021",
  },

];
// import styles from "../styles/Reviews.module.css";

// export const reviewsItem = [
//   {
//     elements: [
//       <>
//         <div>
//           <li>
//             <div className={styles.reviewHeading}>
//               <div className={styles.pfp}>
//                 <img
//                   src={
//                     "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
//                   }
//                   alt="profile pic"
//                 />
//               </div>
//               <div className={styles.author}>
//                 <span>Anonymous</span>
//                 <span>November,2021</span>
//               </div>
//             </div>
//             <div className={styles.comment}>
//               <p>Hello world</p>
//             </div>
//           </li>
//           <li>
//             <div className={styles.reviewHeading}>
//               <div className={styles.pfp}>
//                 <img
//                   src={
//                     "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
//                   }
//                   alt="profile pic"
//                 />
//               </div>
//               <div className={styles.author}>
//                 <span>Anonymous</span>
//                 <span>November,2021</span>
//               </div>
//             </div>
//             <div className={styles.comment}>
//               <p>Hello world</p>
//             </div>
//           </li>
//           <li>
//             <div className={styles.reviewHeading}>
//               <div className={styles.pfp}>
//                 <img
//                   src={
//                     "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
//                   }
//                   alt="profile pic"
//                 />
//               </div>
//               <div className={styles.author}>
//                 <span>Anonymous</span>
//                 <span>November,2021</span>
//               </div>
//             </div>
//             <div className={styles.comment}>
//               <p>Hello world</p>
//             </div>
//           </li>
//         </div>

//         {/* right */}
//         <div>
//           <li>
//             <div className={styles.reviewHeading}>
//               <div className={styles.pfp}>
//                 <img
//                   src={
//                     "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
//                   }
//                   alt="profile pic"
//                 />
//               </div>
//               <div className={styles.author}>
//                 <span>Anonymous</span>
//                 <span>November,2021</span>
//               </div>
//             </div>
//             <div className={styles.comment}>
//               <p>Hello world</p>
//             </div>
//           </li>
//           <li>
//             <div className={styles.reviewHeading}>
//               <div className={styles.pfp}>
//                 <img
//                   src={
//                     "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
//                   }
//                   alt="profile pic"
//                 />
//               </div>
//               <div className={styles.author}>
//                 <span>Anonymous</span>
//                 <span>November,2021</span>
//               </div>
//             </div>
//             <div className={styles.comment}>
//               <p>Hello world</p>
//             </div>
//           </li>
//           <li>
//             <div className={styles.reviewHeading}>
//               <div className={styles.pfp}>
//                 <img
//                   src={
//                     "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
//                   }
//                   alt="profile pic"
//                 />
//               </div>
//               <div className={styles.author}>
//                 <span>Anonymous</span>
//                 <span>November,2021</span>
//               </div>
//             </div>
//             <div className={styles.comment}>
//               <p>Hello world</p>
//             </div>
//           </li>
//         </div>
//       </>,
//     ],
//   },
// ];
