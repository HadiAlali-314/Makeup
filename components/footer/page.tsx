import React from "react";
import styles from "./footer.module.css";
import { Cardo } from "next/font/google";
const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133"
                height="38"
                viewBox="0 0 133 38"
                fill="none"
              >
                <rect width="38" height="38" rx="19" fill="black" />
                <path
                  d="M13.7618 28.7878C12.3999 28.7878 11.1924 28.5432 10.1392 28.0541C9.10411 27.5649 8.28697 26.795 7.68773 25.7442C7.10665 24.6754 6.81611 23.2714 6.81611 21.5322V18.5974C6.81611 17.5829 6.81611 16.5593 6.81611 15.5267C6.81611 14.494 6.80703 13.4523 6.78887 12.4016C6.78887 11.6951 6.45294 11.2512 5.78106 11.0701L5.18182 10.9342V10.3635H12.5361V10.9342L11.7734 11.0972C11.0834 11.2603 10.7384 11.7132 10.7384 12.456C10.7202 13.4705 10.7112 14.494 10.7112 15.5267C10.7112 16.5412 10.7112 17.5647 10.7112 18.5974V22.0485C10.7112 23.8058 11.0653 25.0739 11.7734 25.8529C12.4998 26.6319 13.5258 27.0214 14.8514 27.0214C16.2496 27.0214 17.3391 26.6048 18.1199 25.7714C18.9189 24.9199 19.3184 23.6609 19.3184 21.9942V12.5375C19.3184 12.1752 19.2458 11.8581 19.1005 11.5864C18.9552 11.3146 18.701 11.1425 18.3378 11.0701L17.6841 10.9342V10.3635H21.8788V10.9342L21.1161 11.0972C20.7711 11.1697 20.535 11.3327 20.4079 11.5864C20.2808 11.84 20.2173 12.148 20.2173 12.5103V21.8311C20.2173 24.0775 19.6271 25.7986 18.4468 26.9943C17.2665 28.1899 15.7048 28.7878 13.7618 28.7878Z"
                  fill="white"
                />
                <path
                  d="M13.3023 28.7878L14.4538 28.2024L17.2727 27.0605C17.6596 26.9118 18.0074 26.7263 18.1364 26.4847C18.2838 26.2432 18.4242 26.0299 18.4242 25.6211C19 24.4696 19.3731 24.3838 19.3731 23.3246C19.3731 22.2468 19.3731 21.1691 19.3731 20.0913V19.0879C19.3731 18.0101 19.3639 16.9416 19.3455 15.8824C19.3455 14.8047 19.3455 13.7269 19.3455 12.6491C19.3455 12.2032 19.281 11.8687 19.152 11.6457C19.023 11.4041 18.7559 11.2183 18.3505 11.0882L17.9084 10.9489V10.3635H25.7018C27.9127 10.3635 29.5156 10.7816 30.5105 11.6178C31.5055 12.4354 32.0029 13.476 32.0029 14.7396C32.0029 15.7059 31.6529 16.5793 30.9527 17.3597C30.2526 18.1216 29.0274 18.6698 27.2771 19.0042C29.3038 19.2272 30.7685 19.7568 31.6713 20.593C32.5741 21.4292 33.0255 22.4512 33.0255 23.6591C33.0255 24.2537 32.8965 24.8576 32.6386 25.4708C32.3806 26.0655 31.9384 26.6137 31.312 27.1154C30.704 27.6171 29.8749 28.0259 28.8247 28.3418C27.7746 28.6391 26.448 28.7878 24.8451 28.7878H13.3023ZM23.2975 18.8091H24.5964C25.8492 18.8091 26.752 18.5304 27.3047 17.9729C27.8759 17.3969 28.1615 16.4213 28.1615 15.0462C28.1615 13.6154 27.9035 12.612 27.3876 12.0359C26.8718 11.4599 26.0611 11.1718 24.9556 11.1718H23.2975V18.8091ZM23.2975 27.9794H24.8175C26.1993 27.9794 27.231 27.6357 27.9127 26.9481C28.5944 26.2606 28.9353 25.1549 28.9353 23.6312C28.9353 22.1632 28.6036 21.1319 27.9404 20.5373C27.2955 19.9241 26.2269 19.6175 24.7345 19.6175H23.2975V27.9794Z"
                  fill="white"
                />
                <path
                  d="M24.4697 19.6159C23.8939 19.6159 24.1818 20.4392 24.1818 20.4392H27.3484L31.3787 19.8634L29.9393 18.9998C29.9393 18.9998 27.6021 18.9233 27.2966 18.9998C27.2966 18.9998 25.0454 19.6159 24.4697 19.6159Z"
                  fill="black"
                />
                <path
                  d="M55.2791 26.6923C54.3038 26.6923 53.4235 26.5023 52.6381 26.1223C51.8528 25.7296 51.2258 25.1406 50.7571 24.3553C50.3011 23.5699 50.0731 22.5756 50.0731 21.3723V13.1643H52.5051V21.3913C52.5051 22.4299 52.7521 23.2026 53.2461 23.7093C53.7528 24.2159 54.4495 24.4693 55.3361 24.4693C56.2101 24.4693 56.9005 24.2159 57.4071 23.7093C57.9138 23.2026 58.1671 22.4299 58.1671 21.3913V13.1643H60.5991V21.3723C60.5991 22.5756 60.3585 23.5699 59.8771 24.3553C59.3958 25.1406 58.7498 25.7296 57.9391 26.1223C57.1411 26.5023 56.2545 26.6923 55.2791 26.6923Z"
                  fill="black"
                />
                <path
                  d="M68.4017 26.4643V13.1643H73.3227C74.3867 13.1643 75.2671 13.3416 75.9637 13.6963C76.6604 14.0509 77.1797 14.5386 77.5217 15.1593C77.8637 15.7799 78.0347 16.4766 78.0347 17.2493C78.0347 17.9839 77.8701 18.6616 77.5407 19.2823C77.2114 19.8903 76.6984 20.3843 76.0017 20.7643C75.3051 21.1316 74.4121 21.3153 73.3227 21.3153H70.8337V26.4643H68.4017ZM70.8337 19.3393H73.1707C74.0194 19.3393 74.6274 19.1556 74.9947 18.7883C75.3747 18.4083 75.5647 17.8953 75.5647 17.2493C75.5647 16.5906 75.3747 16.0776 74.9947 15.7103C74.6274 15.3303 74.0194 15.1403 73.1707 15.1403H70.8337V19.3393Z"
                  fill="black"
                />
                <path
                  d="M85.2628 26.4643V13.1643H90.6018C91.9824 13.1643 93.0338 13.4873 93.7558 14.1333C94.4904 14.7666 94.8578 15.5836 94.8578 16.5843C94.8578 17.4203 94.6298 18.0916 94.1738 18.5983C93.7304 19.0923 93.1858 19.4279 92.5398 19.6053C93.2998 19.7573 93.9268 20.1373 94.4208 20.7453C94.9148 21.3406 95.1618 22.0373 95.1618 22.8353C95.1618 23.8866 94.7818 24.7543 94.0218 25.4383C93.2618 26.1223 92.1851 26.4643 90.7918 26.4643H85.2628ZM87.6948 18.7503H90.2408C90.9248 18.7503 91.4504 18.5919 91.8178 18.2753C92.1851 17.9586 92.3688 17.5089 92.3688 16.9263C92.3688 16.3689 92.1851 15.9319 91.8178 15.6153C91.4631 15.2859 90.9248 15.1213 90.2028 15.1213H87.6948V18.7503ZM87.6948 24.4883H90.4118C91.1338 24.4883 91.6911 24.3236 92.0838 23.9943C92.4891 23.6523 92.6918 23.1773 92.6918 22.5693C92.6918 21.9486 92.4828 21.4609 92.0648 21.1063C91.6468 20.7516 91.0831 20.5743 90.3738 20.5743H87.6948V24.4883Z"
                  fill="black"
                />
                <path
                  d="M108.801 26.6923C107.471 26.6923 106.306 26.4009 105.305 25.8183C104.317 25.2356 103.538 24.4313 102.968 23.4053C102.411 22.3666 102.132 21.1696 102.132 19.8143C102.132 18.4589 102.411 17.2683 102.968 16.2423C103.538 15.2036 104.317 14.3929 105.305 13.8103C106.306 13.2276 107.471 12.9363 108.801 12.9363C110.118 12.9363 111.277 13.2276 112.278 13.8103C113.279 14.3929 114.058 15.2036 114.615 16.2423C115.172 17.2683 115.451 18.4589 115.451 19.8143C115.451 21.1696 115.172 22.3666 114.615 23.4053C114.058 24.4313 113.279 25.2356 112.278 25.8183C111.277 26.4009 110.118 26.6923 108.801 26.6923ZM108.801 24.5073C110.068 24.5073 111.075 24.0893 111.822 23.2533C112.582 22.4173 112.962 21.2709 112.962 19.8143C112.962 18.3576 112.582 17.2113 111.822 16.3753C111.075 15.5393 110.068 15.1213 108.801 15.1213C107.534 15.1213 106.521 15.5393 105.761 16.3753C105.001 17.2113 104.621 18.3576 104.621 19.8143C104.621 21.2709 105.001 22.4173 105.761 23.2533C106.521 24.0893 107.534 24.5073 108.801 24.5073Z"
                  fill="black"
                />
                <path
                  d="M121.308 26.4643L125.469 19.7383L121.251 13.1643H124.044L127.027 17.8003L129.763 13.1643H132.499L128.338 19.8523L132.594 26.4643H129.801L126.78 21.7713L124.044 26.4643H121.308Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.social}>
              <img src="/ig.png" alt="" />
              <img src="/fb.png" alt="" />
              <img src="/tw.png" alt="" />
              <img src="/sc.png" alt="" />
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h1>UPBOX</h1>
              <ul>
                <li>Upbox Bag</li>
                <li>Upbox Box Platinum</li>
                <li>Upbox Box VIP</li>
                <li>Deals</li>
                <li>Seasonal Items</li>
                <li>Upbox Promise</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h1>Find Us On</h1>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>TikTok</li>
                <li>SnapChat</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h1>Product</h1>
              <ul>
                <li>Get the App</li>
                <li>Loyalty Program</li>
                <li>Affiliates</li>
                <li>Press</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h1>Help</h1>
              <ul>
                <li>Returns</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Community</li>
                <li>Videos</li>
              </ul>
            </div>
          </div>

          <div className={styles.rights}>
            <h1>
              © 2020 Quest AI. Upbox is a Sample Project and open source design
              project free for personal and commercial use.
            </h1>
            <h1>Terms</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
