import Link from 'next/link'

import styles from './styles.module.scss'

export default function LastResolutions() {


  const pages = [
    {
      name: "Formulario del Banco de Peritos",
      link:"https://docs.google.com/forms/d/e/1FAIpQLSe4PbfqcKpPGjHhVCUXd8T5B10_QE3F4WXEF3lmEjYsAsOSsA/closedform",
      svg: <svg width="53" height="57" viewBox="0 0 53 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.67466 53.68C5.08336 53.68 3.55724 53.0478 2.43202 51.9226C1.3068 50.7974 0.674664 49.2713 0.674664 47.68L0.671997 10.3333C0.671997 8.74202 1.30414 7.21589 2.42936 6.09067C3.55457 4.96546 5.0807 4.33331 6.672 4.33331L8.664 4.33065V2.33331C8.66411 1.84961 8.83951 1.38234 9.15771 1.01805C9.47592 0.653751 9.91537 0.41712 10.3947 0.351981L10.6667 0.333315C11.15 0.333335 11.6169 0.508362 11.9811 0.826027C12.3454 1.14369 12.5823 1.5825 12.648 2.06131L12.6667 2.33331L12.664 4.33065H20.6667V2.33331C20.6668 1.84961 20.8422 1.38234 21.1604 1.01805C21.4786 0.653751 21.918 0.41712 22.3973 0.351981L22.6667 0.333315C23.1504 0.33269 23.618 0.507426 23.9828 0.82515C24.3476 1.14287 24.5849 1.58205 24.6507 2.06131L24.6693 2.33331L24.6667 4.33065H32.6613V2.33331C32.6614 1.84961 32.8368 1.38234 33.155 1.01805C33.4733 0.653751 33.9127 0.41712 34.392 0.351981L34.6667 0.333315C35.15 0.333335 35.6169 0.508362 35.9811 0.826027C36.3454 1.14369 36.5823 1.5825 36.648 2.06131L36.6667 2.33331L36.664 4.33065H38.664C40.2553 4.33065 41.7814 4.96279 42.9066 6.08801C44.0319 7.21323 44.664 8.73935 44.664 10.3306V25.2293C43.4148 24.637 42.0492 24.3309 40.6667 24.3333H40.664V10.3333C40.664 10.0704 40.6122 9.81016 40.5115 9.56733C40.4108 9.32451 40.2633 9.10391 40.0773 8.91816C39.8913 8.73241 39.6705 8.58514 39.4275 8.48479C39.1846 8.38444 38.9242 8.33296 38.6613 8.33332H6.64533C6.11953 8.34033 5.61765 8.55413 5.24832 8.92845C4.879 9.30276 4.67195 9.80747 4.672 10.3333L4.67466 47.6773C4.67466 48.784 5.57066 49.6773 6.67466 49.6773H26.1413C26.376 51.08 26.9147 52.4453 27.7813 53.6773H6.67466V53.68ZM10.6667 37.6666H21.328C21.8347 37.6668 22.3225 37.8593 22.6928 38.2052C23.063 38.5512 23.2882 39.0248 23.3227 39.5303C23.3573 40.0359 23.1986 40.5357 22.8788 40.9288C22.5591 41.3219 22.102 41.5789 21.6 41.648L21.328 41.6667H10.6667C10.1599 41.6665 9.67215 41.474 9.30189 41.1281C8.93162 40.7821 8.70647 40.3085 8.67193 39.803C8.63739 39.2974 8.79604 38.7976 9.11582 38.4045C9.4356 38.0114 9.89266 37.7544 10.3947 37.6853L10.6667 37.6666ZM10.6667 16.3333H34.6613C35.1681 16.3335 35.6558 16.526 36.0261 16.8719C36.3964 17.2179 36.6215 17.6914 36.6561 18.197C36.6906 18.7025 36.532 19.2024 36.2122 19.5954C35.8924 19.9885 35.4353 20.2456 34.9333 20.3146L34.6613 20.3333H10.6667C10.1599 20.3332 9.67215 20.1407 9.30189 19.7947C8.93162 19.4488 8.70647 18.9752 8.67193 18.4696C8.63739 17.9641 8.79604 17.4643 9.11582 17.0712C9.4356 16.6781 9.89266 16.4211 10.3947 16.352L10.6667 16.3333ZM40.6667 40.3333C42.4348 40.3333 44.1305 39.6309 45.3807 38.3807C46.6309 37.1305 47.3333 35.4348 47.3333 33.6666C47.3333 31.8985 46.6309 30.2028 45.3807 28.9526C44.1305 27.7024 42.4348 27 40.6667 27C38.8986 27 37.2029 27.7024 35.9526 28.9526C34.7024 30.2028 34 31.8985 34 33.6666C34 35.4348 34.7024 37.1305 35.9526 38.3807C37.2029 39.6309 38.8986 40.3333 40.6667 40.3333ZM40.6667 56.3333C49.2373 56.3333 52.6667 52.1493 52.6667 48V47.7253C52.6667 45.1146 50.5493 43 47.9387 43H33.3947C30.7813 43 28.6667 45.1146 28.6667 47.7253V48C28.6667 52.1653 32.096 56.3333 40.6667 56.3333ZM10.6667 27C10.1362 27 9.62752 27.2107 9.25245 27.5858C8.87738 27.9608 8.66666 28.4696 8.66666 29C8.66666 29.5304 8.87738 30.0391 9.25245 30.4142C9.62752 30.7893 10.1362 31 10.6667 31H26.6667C27.1971 31 27.7058 30.7893 28.0809 30.4142C28.4559 30.0391 28.6667 29.5304 28.6667 29C28.6667 28.4696 28.4559 27.9608 28.0809 27.5858C27.7058 27.2107 27.1971 27 26.6667 27H10.6667Z" fill="#0054A4" />
      </svg>


    },
    {
      name: "Flujograma de Trámites",
      link:"/marco-normativo/flujograma",
        svg: <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.9947 0.989319C6.4034 0.989319 4.87728 1.62146 3.75206 2.74668C2.62684 3.8719 1.9947 5.39802 1.9947 6.98932V13.6747C1.9947 15.266 2.62684 16.7921 3.75206 17.9173C4.87728 19.0425 6.4034 19.6747 7.9947 19.6747H9.33336V29.56C9.20707 29.6545 9.08766 29.7579 8.97603 29.8693L1.5307 37.312C1.22108 37.6215 0.975466 37.989 0.807896 38.3935C0.640325 38.798 0.554077 39.2315 0.554077 39.6693C0.554077 40.1071 0.640325 40.5407 0.807896 40.9451C0.975466 41.3496 1.22108 41.7171 1.5307 42.0267L8.97603 49.472C9.28557 49.7816 9.65307 50.0272 10.0576 50.1948C10.462 50.3624 10.8956 50.4486 11.3334 50.4486C11.7712 50.4486 12.2047 50.3624 12.6092 50.1948C13.0137 50.0272 13.3812 49.7816 13.6907 49.472L21.1307 42.0267C21.2433 41.9153 21.3475 41.7959 21.4427 41.6693H31.3467V43.0133C31.3467 43.8012 31.5019 44.5815 31.8034 45.3094C32.1049 46.0374 32.5469 46.6988 33.1041 47.256C33.6612 47.8131 34.3226 48.2551 35.0506 48.5566C35.7785 48.8581 36.5588 49.0133 37.3467 49.0133H43.9974C45.5887 49.0133 47.1148 48.3812 48.24 47.256C49.3652 46.1307 49.9974 44.6046 49.9974 43.0133V36.3333C49.9974 34.742 49.3652 33.2159 48.24 32.0907C47.1148 30.9655 45.5887 30.3333 43.9974 30.3333H37.3467C35.7554 30.3333 34.2293 30.9655 33.1041 32.0907C31.9788 33.2159 31.3467 34.742 31.3467 36.3333V37.6693H21.44C21.3455 37.5431 21.2421 37.4236 21.1307 37.312L13.6907 29.872C13.5791 29.7597 13.4597 29.6554 13.3334 29.56V19.6747H14.68C15.468 19.6747 16.2482 19.5195 16.9761 19.2179C17.7041 18.9164 18.3655 18.4744 18.9227 17.9173C19.4798 17.3601 19.9218 16.6987 20.2233 15.9708C20.5248 15.2428 20.68 14.4626 20.68 13.6747V6.98932C20.68 6.20139 20.5248 5.42117 20.2233 4.69322C19.9218 3.96526 19.4798 3.30383 18.9227 2.74668C18.3655 2.18953 17.7041 1.74757 16.9761 1.44604C16.2482 1.14451 15.468 0.989319 14.68 0.989319H7.9947V0.989319ZM5.9947 6.98932C5.9947 6.45889 6.20541 5.95018 6.58048 5.57511C6.95556 5.20003 7.46427 4.98932 7.9947 4.98932H14.68C15.2105 4.98932 15.7192 5.20003 16.0942 5.57511C16.4693 5.95018 16.68 6.45889 16.68 6.98932V13.6747C16.68 14.2051 16.4693 14.7138 16.0942 15.0889C15.7192 15.4639 15.2105 15.6747 14.68 15.6747H7.9947C7.46427 15.6747 6.95556 15.4639 6.58048 15.0889C6.20541 14.7138 5.9947 14.2051 5.9947 13.6747V6.98932ZM4.8267 39.6693L11.3334 33.168L17.832 39.6693L11.3334 46.1733L4.8267 39.6667V39.6693ZM37.344 34.336H43.9947C44.5251 34.336 45.0338 34.5467 45.4089 34.9218C45.784 35.2968 45.9947 35.8056 45.9947 36.336V43.0133C45.9947 43.5438 45.784 44.0525 45.4089 44.4275C45.0338 44.8026 44.5251 45.0133 43.9947 45.0133H37.344C36.8136 45.0133 36.3049 44.8026 35.9298 44.4275C35.5547 44.0525 35.344 43.5438 35.344 43.0133V36.3333C35.344 35.8029 35.5547 35.2942 35.9298 34.9191C36.3049 34.544 36.8136 34.3333 37.344 34.3333V34.336Z" fill="#0054A4" />
      </svg>
    },
    {
      name: "Noticias",
      link:"/entradas/noticias/",
      svg: <svg width="54" height="44" viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.6667 43.3334H8.66667C6.45297 43.3335 4.32312 42.4865 2.71405 40.9662C1.10498 39.4459 0.138663 37.3675 0.0133337 35.1574L4.53298e-08 34.6667V6.66669C-0.000186725 5.14635 0.576788 3.68263 1.61432 2.57135C2.65185 1.46006 4.07256 0.784079 5.58933 0.680021L6 0.666687H39.3333C40.8537 0.6665 42.3174 1.24347 43.4287 2.281C44.54 3.31853 45.2159 4.73925 45.32 6.25602L45.3333 6.66669V8.66669H47.3333C48.8537 8.6665 50.3174 9.24347 51.4287 10.281C52.54 11.3185 53.2159 12.7392 53.32 14.256L53.3333 14.6667V34.6667C53.3335 36.8804 52.4865 39.0102 50.9662 40.6193C49.4459 42.2284 47.3675 43.1947 45.1573 43.32L44.6667 43.3334H8.66667H44.6667ZM8.66667 39.3334H44.6667C45.8383 39.3333 46.967 38.8925 47.8286 38.0986C48.6901 37.3046 49.2216 36.2157 49.3173 35.048L49.3333 34.6667V14.6667C49.3333 14.1834 49.1583 13.7164 48.8406 13.3522C48.523 12.988 48.0841 12.7511 47.6053 12.6854L47.3333 12.6667H45.3333V33.3334C45.3333 33.8167 45.1583 34.2836 44.8406 34.6478C44.523 35.0121 44.0841 35.249 43.6053 35.3147L43.3333 35.3334C42.85 35.3333 42.3831 35.1583 42.0188 34.8406C41.6546 34.523 41.4177 34.0842 41.352 33.6054L41.3333 33.3334V6.66669C41.3333 6.18339 41.1583 5.71644 40.8406 5.35221C40.523 4.98797 40.0841 4.75108 39.6053 4.68535L39.3333 4.66669H6C5.5167 4.66671 5.04975 4.84173 4.68552 5.1594C4.32128 5.47706 4.08439 5.91588 4.01867 6.39469L4 6.66669V34.6667C4.00004 35.8379 4.44046 36.9662 5.23381 37.8277C6.02717 38.6893 7.11546 39.221 8.28267 39.3174L8.66667 39.3334H44.6667H8.66667ZM27.3227 28.6667H35.3387C35.8454 28.6668 36.3332 28.8593 36.7034 29.2053C37.0737 29.5512 37.2989 30.0248 37.3334 30.5304C37.3679 31.0359 37.2093 31.5357 36.8895 31.9288C36.5697 32.3219 36.1127 32.579 35.6107 32.648L35.3387 32.6667H27.3227C26.8159 32.6665 26.3282 32.474 25.9579 32.1281C25.5876 31.7822 25.3625 31.3086 25.3279 30.803C25.2934 30.2975 25.452 29.7976 25.7718 29.4046C26.0916 29.0115 26.5487 28.7544 27.0507 28.6854L27.3227 28.6667H35.3387H27.3227ZM19.3147 19.3467C19.8451 19.3467 20.3538 19.5574 20.7289 19.9325C21.104 20.3075 21.3147 20.8163 21.3147 21.3467V30.6667C21.3147 31.1971 21.104 31.7058 20.7289 32.0809C20.3538 32.456 19.8451 32.6667 19.3147 32.6667H9.99467C9.46423 32.6667 8.95553 32.456 8.58045 32.0809C8.20538 31.7058 7.99467 31.1971 7.99467 30.6667V21.3467C7.99467 20.8163 8.20538 20.3075 8.58045 19.9325C8.95553 19.5574 9.46423 19.3467 9.99467 19.3467H19.3147ZM17.3147 23.3467H11.9947V28.6667H17.3147V23.3467ZM27.3227 19.3467H35.3387C35.8454 19.3468 36.3332 19.5393 36.7034 19.8853C37.0737 20.2312 37.2989 20.7048 37.3334 21.2104C37.3679 21.7159 37.2093 22.2157 36.8895 22.6088C36.5697 23.0019 36.1127 23.259 35.6107 23.328L35.3387 23.3467H27.3227C26.8123 23.3519 26.3193 23.1618 25.9446 22.8153C25.5698 22.4688 25.3417 21.9922 25.307 21.483C25.2722 20.9738 25.4334 20.4706 25.7576 20.0764C26.0818 19.6823 26.5444 19.4269 27.0507 19.3627L27.3227 19.3467H35.3387H27.3227ZM9.99467 10.0054H35.3387C35.849 10.0002 36.342 10.1903 36.7168 10.5367C37.0915 10.8832 37.3196 11.3598 37.3544 11.869C37.3891 12.3782 37.2279 12.8814 36.9037 13.2756C36.5796 13.6698 36.117 13.9251 35.6107 13.9894L35.3387 14.0054H9.99467C9.48794 14.0052 9.00016 13.8127 8.62989 13.4668C8.25962 13.1208 8.03447 12.6472 7.99993 12.1417C7.96539 11.6361 8.12404 11.1363 8.44382 10.7432C8.7636 10.3501 9.22067 10.0931 9.72267 10.024L9.99467 10.0054H35.3387H9.99467Z" fill="#0054A4" />
      </svg>

    },

    {
      name: "Congreso Internacional de Derecho Tributario",
      link:"/entradas/congreso-internacional-de-derecho-tributario/",
      svg: <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.6773 18.6667C37.2533 18.6667 39.344 20.7573 39.344 23.3333V32H39.3333V32.6667C39.3333 33.1971 39.1226 33.7058 38.7475 34.0809C38.3724 34.456 37.8637 34.6667 37.3333 34.6667C36.8029 34.6667 36.2942 34.456 35.9191 34.0809C35.544 33.7058 35.3333 33.1971 35.3333 32.6667V26.6667H35.344V23.3333C35.344 23.1565 35.2737 22.987 35.1487 22.8619C35.0237 22.7369 34.8541 22.6667 34.6773 22.6667H20.0053C19.8285 22.6667 19.6589 22.7369 19.5339 22.8619C19.4089 22.987 19.3386 23.1565 19.3386 23.3333V32H19.3333V32.6667C19.3333 33.1971 19.1226 33.7058 18.7475 34.0809C18.3724 34.456 17.8637 34.6667 17.3333 34.6667C16.8029 34.6667 16.2942 34.456 15.9191 34.0809C15.544 33.7058 15.3333 33.1971 15.3333 32.6667V26.6667H15.3386V23.3333C15.3386 20.7573 17.4266 18.6667 20.0053 18.6667H34.6773ZM50 23.3333V32.6667C50 33.1971 50.2107 33.7058 50.5857 34.0809C50.9608 34.456 51.4695 34.6667 52 34.6667C52.5304 34.6667 53.0391 34.456 53.4142 34.0809C53.7892 33.7058 54 33.1971 54 32.6667V23.3333C54 22.0957 53.5083 20.9087 52.6331 20.0335C51.7579 19.1583 50.571 18.6667 49.3333 18.6667H40.3333C41.248 19.7733 41.8453 21.152 41.9813 22.6667H49.3333C49.5101 22.6667 49.6797 22.7369 49.8047 22.8619C49.9297 22.987 50 23.1565 50 23.3333ZM0.666626 32.6667C0.666626 33.1971 0.877339 33.7058 1.25241 34.0809C1.62748 34.456 2.13619 34.6667 2.66663 34.6667C3.19706 34.6667 3.70577 34.456 4.08084 34.0809C4.45591 33.7058 4.66663 33.1971 4.66663 32.6667V23.3333C4.66663 23.1565 4.73686 22.987 4.86189 22.8619C4.98691 22.7369 5.15648 22.6667 5.33329 22.6667H12.7013C12.8339 21.1975 13.4085 19.8029 14.3493 18.6667H5.33329C4.09562 18.6667 2.90863 19.1583 2.03346 20.0335C1.15829 20.9087 0.666626 22.0957 0.666626 23.3333V32.6667ZM27.3333 0C29.455 0 31.4899 0.842855 32.9901 2.34315C34.4904 3.84344 35.3333 5.87827 35.3333 8C35.3333 10.1217 34.4904 12.1566 32.9901 13.6569C31.4899 15.1571 29.455 16 27.3333 16C25.2116 16 23.1767 15.1571 21.6764 13.6569C20.1761 12.1566 19.3333 10.1217 19.3333 8C19.3333 5.87827 20.1761 3.84344 21.6764 2.34315C23.1767 0.842855 25.2116 0 27.3333 0ZM27.3333 4C26.2724 4 25.255 4.42143 24.5049 5.17157C23.7547 5.92172 23.3333 6.93913 23.3333 8C23.3333 9.06087 23.7547 10.0783 24.5049 10.8284C25.255 11.5786 26.2724 12 27.3333 12C28.3942 12 29.4116 11.5786 30.1617 10.8284C30.9119 10.0783 31.3333 9.06087 31.3333 8C31.3333 6.93913 30.9119 5.92172 30.1617 5.17157C29.4116 4.42143 28.3942 4 27.3333 4ZM44.6666 2.66667C46.4347 2.66667 48.1304 3.36905 49.3807 4.61929C50.6309 5.86953 51.3333 7.56522 51.3333 9.33333C51.3333 11.1014 50.6309 12.7971 49.3807 14.0474C48.1304 15.2976 46.4347 16 44.6666 16C42.8985 16 41.2028 15.2976 39.9526 14.0474C38.7023 12.7971 38 11.1014 38 9.33333C38 7.56522 38.7023 5.86953 39.9526 4.61929C41.2028 3.36905 42.8985 2.66667 44.6666 2.66667ZM44.6666 6.66667C43.9594 6.66667 43.2811 6.94762 42.781 7.44772C42.2809 7.94781 42 8.62609 42 9.33333C42 10.0406 42.2809 10.7189 42.781 11.219C43.2811 11.719 43.9594 12 44.6666 12C45.3739 12 46.0521 11.719 46.5522 11.219C47.0523 10.7189 47.3333 10.0406 47.3333 9.33333C47.3333 8.62609 47.0523 7.94781 46.5522 7.44772C46.0521 6.94762 45.3739 6.66667 44.6666 6.66667ZM9.99996 2.66667C11.7681 2.66667 13.4638 3.36905 14.714 4.61929C15.9642 5.86953 16.6666 7.56522 16.6666 9.33333C16.6666 11.1014 15.9642 12.7971 14.714 14.0474C13.4638 15.2976 11.7681 16 9.99996 16C8.23185 16 6.53616 15.2976 5.28591 14.0474C4.03567 12.7971 3.33329 11.1014 3.33329 9.33333C3.33329 7.56522 4.03567 5.86953 5.28591 4.61929C6.53616 3.36905 8.23185 2.66667 9.99996 2.66667ZM9.99996 6.66667C9.29272 6.66667 8.61444 6.94762 8.11434 7.44772C7.61424 7.94781 7.33329 8.62609 7.33329 9.33333C7.33329 10.0406 7.61424 10.7189 8.11434 11.219C8.61444 11.719 9.29272 12 9.99996 12C10.7072 12 11.3855 11.719 11.8856 11.219C12.3857 10.7189 12.6666 10.0406 12.6666 9.33333C12.6666 8.62609 12.3857 7.94781 11.8856 7.44772C11.3855 6.94762 10.7072 6.66667 9.99996 6.66667ZM2.66663 37.3333C2.13619 37.3333 1.62748 37.544 1.25241 37.9191C0.877339 38.2942 0.666626 38.8029 0.666626 39.3333V40.6667C0.666626 43.3188 1.72019 45.8624 3.59556 47.7377C5.47092 49.6131 8.01446 50.6667 10.6666 50.6667H44C46.6521 50.6667 49.1957 49.6131 51.071 47.7377C52.9464 45.8624 54 43.3188 54 40.6667V39.3333C54 38.8029 53.7892 38.2942 53.4142 37.9191C53.0391 37.544 52.5304 37.3333 52 37.3333H2.66663ZM10.6666 46.6667C9.19079 46.6666 7.76675 46.1227 6.66674 45.1387C5.56673 44.1548 4.86794 42.8 4.70396 41.3333H49.9626C49.7986 42.8 49.0998 44.1548 47.9998 45.1387C46.8998 46.1227 45.4758 46.6666 44 46.6667H10.6666Z" fill="#0054A4" />
      </svg>


    },
    {
      name: "Revista de Justicia Tributaria",
      link:"/publicaciones/revista-tributaria/",
      svg: <svg width="57" height="49" viewBox="0 0 57 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6666 0.666687C8.72171 0.666687 6.85645 1.4393 5.48118 2.81457C4.10592 4.18984 3.3333 6.0551 3.3333 8.00002V20.0187C4.53328 19.0272 5.88353 18.2333 7.3333 17.6667V8.00002C7.3333 6.16002 8.82663 4.66669 10.6666 4.66669H49.3333C51.1733 4.66669 52.6666 6.16002 52.6666 8.00002V36C52.6666 37.84 51.1733 39.3334 49.3333 39.3334H27.2666L31.2666 43.3334H49.3333C50.2963 43.3334 51.2499 43.1437 52.1396 42.7751C53.0294 42.4066 53.8378 41.8664 54.5188 41.1855C55.1997 40.5045 55.7399 39.6961 56.1084 38.8064C56.477 37.9166 56.6666 36.963 56.6666 36V8.00002C56.6666 6.0551 55.894 4.18984 54.5188 2.81457C53.1435 1.4393 51.2782 0.666687 49.3333 0.666687H10.6666ZM21.1013 19.3334C22.6295 20.41 23.9389 21.7675 24.96 23.3334H44C44.5304 23.3334 45.0391 23.1226 45.4142 22.7476C45.7893 22.3725 46 21.8638 46 21.3334C46 20.8029 45.7893 20.2942 45.4142 19.9191C45.0391 19.5441 44.5304 19.3334 44 19.3334H21.1013ZM38.6666 31.3334H27.3333C27.3346 29.9809 27.1488 28.6349 26.7813 27.3334H38.6666C39.1971 27.3334 39.7058 27.5441 40.0808 27.9191C40.4559 28.2942 40.6666 28.8029 40.6666 29.3334C40.6666 29.8638 40.4559 30.3725 40.0808 30.7476C39.7058 31.1226 39.1971 31.3334 38.6666 31.3334ZM16 11.3334C15.4695 11.3334 14.9608 11.5441 14.5858 11.9191C14.2107 12.2942 14 12.8029 14 13.3334C14 13.8638 14.2107 14.3725 14.5858 14.7476C14.9608 15.1226 15.4695 15.3334 16 15.3334H33.3333C33.8637 15.3334 34.3724 15.1226 34.7475 14.7476C35.1226 14.3725 35.3333 13.8638 35.3333 13.3334C35.3333 12.8029 35.1226 12.2942 34.7475 11.9191C34.3724 11.5441 33.8637 11.3334 33.3333 11.3334H16ZM12.6666 43.3334C15.1587 43.337 17.5894 42.5612 19.6186 41.1147L26.5866 48.08C26.7697 48.2765 26.9905 48.4341 27.2359 48.5434C27.4812 48.6527 27.746 48.7115 28.0146 48.7163C28.2831 48.721 28.5499 48.6716 28.7989 48.571C29.0479 48.4704 29.2742 48.3207 29.4641 48.1308C29.654 47.9409 29.8037 47.7146 29.9043 47.4656C30.0049 47.2166 30.0543 46.9498 30.0495 46.6813C30.0448 46.4128 29.986 46.1479 29.8767 45.9026C29.7674 45.6572 29.6098 45.4364 29.4133 45.2533L22.448 38.2854C24.0064 36.0927 24.7829 33.44 24.6528 30.7531C24.5228 28.0662 23.4936 25.5009 21.7307 23.469C19.9677 21.4372 17.5732 20.0566 14.9314 19.549C12.2897 19.0413 9.55402 19.436 7.16353 20.6697C4.77304 21.9034 2.86641 23.9045 1.7497 26.3519C0.632989 28.7992 0.370978 31.5508 1.00573 34.1649C1.64047 36.779 3.13516 39.104 5.24985 40.7667C7.36454 42.4294 9.97657 43.3333 12.6666 43.3334ZM12.6666 39.3334C10.5449 39.3334 8.51007 38.4905 7.00978 36.9902C5.50949 35.4899 4.66663 33.4551 4.66663 31.3334C4.66663 29.2116 5.50949 27.1768 7.00978 25.6765C8.51007 24.1762 10.5449 23.3334 12.6666 23.3334C14.7884 23.3334 16.8232 24.1762 18.3235 25.6765C19.8238 27.1768 20.6666 29.2116 20.6666 31.3334C20.6666 33.4551 19.8238 35.4899 18.3235 36.9902C16.8232 38.4905 14.7884 39.3334 12.6666 39.3334Z" fill="#0054A4" />
      </svg>


    },
    {
      name: "Preguntas Frecuentes",
      link:"/preguntas-frecuentes",
      svg: <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6666 0.333313C41.3946 0.333313 53.3332 12.272 53.3332 27C53.3332 41.728 41.3946 53.6666 26.6666 53.6666C22.4105 53.6725 18.2154 52.6555 14.4346 50.7013L4.2319 53.5466C3.66268 53.7055 3.06145 53.7102 2.48983 53.5602C1.91821 53.4102 1.39674 53.1109 0.978859 52.693C0.560977 52.2751 0.261704 51.7537 0.111706 51.182C-0.0382925 50.6104 -0.0336238 50.0092 0.125234 49.44L2.97323 39.2453C1.01417 35.4611 -0.00563887 31.2612 -9.96251e-05 27C-9.96251e-05 12.272 11.9386 0.333313 26.6666 0.333313ZM26.6666 4.33331C20.655 4.33331 14.8896 6.7214 10.6388 10.9722C6.38799 15.2231 3.9999 20.9884 3.9999 27C3.9999 30.92 4.99457 34.688 6.86123 38.032L7.26123 38.752L4.2959 49.376L14.9279 46.4106L15.6479 46.8106C18.6729 48.4925 22.0429 49.4593 25.4995 49.6368C28.9561 49.8143 32.4074 49.198 35.5888 47.8349C38.7702 46.4718 41.5972 44.3983 43.8531 41.7733C46.1089 39.1483 47.7337 36.0416 48.6027 32.6914C49.4718 29.3411 49.5621 25.8364 48.8667 22.4458C48.1713 19.0553 46.7086 15.869 44.5909 13.1314C42.4732 10.3937 39.7567 8.17737 36.6497 6.65231C33.5427 5.12725 30.1277 4.33398 26.6666 4.33331ZM26.6666 36.3333C27.3738 36.3333 28.0521 36.6143 28.5522 37.1144C29.0523 37.6145 29.3332 38.2927 29.3332 39C29.3332 39.7072 29.0523 40.3855 28.5522 40.8856C28.0521 41.3857 27.3738 41.6666 26.6666 41.6666C25.9593 41.6666 25.281 41.3857 24.781 40.8856C24.2809 40.3855 23.9999 39.7072 23.9999 39C23.9999 38.2927 24.2809 37.6145 24.781 37.1144C25.281 36.6143 25.9593 36.3333 26.6666 36.3333ZM26.6666 13C28.6115 13 30.4768 13.7726 31.852 15.1479C33.2273 16.5231 33.9999 18.3884 33.9999 20.3333C33.9999 23.0266 33.2079 24.5306 31.1972 26.624L30.7466 27.08C29.0879 28.7386 28.6666 29.4426 28.6666 31C28.6666 31.5304 28.4559 32.0391 28.0808 32.4142C27.7057 32.7893 27.197 33 26.6666 33C26.1361 33 25.6274 32.7893 25.2524 32.4142C24.8773 32.0391 24.6666 31.5304 24.6666 31C24.6666 28.3066 25.4586 26.8026 27.4692 24.7093L27.9199 24.2533C29.5786 22.5946 29.9999 21.8906 29.9999 20.3333C29.9971 19.4807 29.6678 18.6616 29.0796 18.0444C28.4913 17.4272 27.689 17.0589 26.8375 17.0151C25.986 16.9714 25.1502 17.2556 24.5018 17.8093C23.8535 18.3631 23.442 19.1441 23.3519 19.992L23.3332 20.3333C23.3332 20.8637 23.1225 21.3725 22.7474 21.7475C22.3724 22.1226 21.8637 22.3333 21.3332 22.3333C20.8028 22.3333 20.2941 22.1226 19.919 21.7475C19.5439 21.3725 19.3332 20.8637 19.3332 20.3333C19.3332 18.3884 20.1059 16.5231 21.4811 15.1479C22.8564 13.7726 24.7216 13 26.6666 13Z" fill="#0054A4" />
      </svg>

    },




  ]
  return (
    <>
     

      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 mb-28 gap-y-3">

        {pages.map((e, i) => (
          <Link key={i} href={e.link} >
            <a className='paginas-interes'>
              {e.svg}
              <p className='font-bold'>{e.name}</p>
            </a>
          </Link>
        ))}
      </div>
    </>

  )
}
