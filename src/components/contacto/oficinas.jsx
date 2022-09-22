import React from 'react'

export default function Oficinas() {
    return (
        <div className='mb-16 md:mb-36'>
            <div className='subtitle'>

                <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.75 26.25H31.625V11.625C31.625 11.0283 31.3879 10.456 30.966 10.034C30.544 9.61205 29.9717 9.375 29.375 9.375H20.375V2.625C20.375 2.02826 20.1379 1.45597 19.716 1.03401C19.294 0.612053 18.7217 0.375 18.125 0.375H4.625C4.02826 0.375 3.45597 0.612053 3.03401 1.03401C2.61205 1.45597 2.375 2.02826 2.375 2.625V26.25H1.25C0.951631 26.25 0.665483 26.3685 0.454505 26.5795C0.243526 26.7905 0.125 27.0766 0.125 27.375C0.125 27.6734 0.243526 27.9595 0.454505 28.1705C0.665483 28.3815 0.951631 28.5 1.25 28.5H32.75C33.0484 28.5 33.3345 28.3815 33.5455 28.1705C33.7565 27.9595 33.875 27.6734 33.875 27.375C33.875 27.0766 33.7565 26.7905 33.5455 26.5795C33.3345 26.3685 33.0484 26.25 32.75 26.25ZM29.375 11.625V26.25H20.375V11.625H29.375ZM4.625 2.625H18.125V26.25H4.625V2.625ZM6.875 7.125C6.875 6.82663 6.99353 6.54048 7.2045 6.3295C7.41548 6.11853 7.70163 6 8 6H12.5C12.7984 6 13.0845 6.11853 13.2955 6.3295C13.5065 6.54048 13.625 6.82663 13.625 7.125C13.625 7.42337 13.5065 7.70952 13.2955 7.9205C13.0845 8.13147 12.7984 8.25 12.5 8.25H8C7.70163 8.25 7.41548 8.13147 7.2045 7.9205C6.99353 7.70952 6.875 7.42337 6.875 7.125ZM15.875 16.125C15.875 16.4234 15.7565 16.7095 15.5455 16.9205C15.3345 17.1315 15.0484 17.25 14.75 17.25H10.25C9.95163 17.25 9.66548 17.1315 9.4545 16.9205C9.24353 16.7095 9.125 16.4234 9.125 16.125C9.125 15.8266 9.24353 15.5405 9.4545 15.3295C9.66548 15.1185 9.95163 15 10.25 15H14.75C15.0484 15 15.3345 15.1185 15.5455 15.3295C15.7565 15.5405 15.875 15.8266 15.875 16.125ZM13.625 21.75C13.625 22.0484 13.5065 22.3345 13.2955 22.5455C13.0845 22.7565 12.7984 22.875 12.5 22.875H8C7.70163 22.875 7.41548 22.7565 7.2045 22.5455C6.99353 22.3345 6.875 22.0484 6.875 21.75C6.875 21.4516 6.99353 21.1655 7.2045 20.9545C7.41548 20.7435 7.70163 20.625 8 20.625H12.5C12.7984 20.625 13.0845 20.7435 13.2955 20.9545C13.5065 21.1655 13.625 21.4516 13.625 21.75ZM27.125 21.75C27.125 22.0484 27.0065 22.3345 26.7955 22.5455C26.5845 22.7565 26.2984 22.875 26 22.875H23.75C23.4516 22.875 23.1655 22.7565 22.9545 22.5455C22.7435 22.3345 22.625 22.0484 22.625 21.75C22.625 21.4516 22.7435 21.1655 22.9545 20.9545C23.1655 20.7435 23.4516 20.625 23.75 20.625H26C26.2984 20.625 26.5845 20.7435 26.7955 20.9545C27.0065 21.1655 27.125 21.4516 27.125 21.75ZM22.625 16.125C22.625 15.8266 22.7435 15.5405 22.9545 15.3295C23.1655 15.1185 23.4516 15 23.75 15H26C26.2984 15 26.5845 15.1185 26.7955 15.3295C27.0065 15.5405 27.125 15.8266 27.125 16.125C27.125 16.4234 27.0065 16.7095 26.7955 16.9205C26.5845 17.1315 26.2984 17.25 26 17.25H23.75C23.4516 17.25 23.1655 17.1315 22.9545 16.9205C22.7435 16.7095 22.625 16.4234 22.625 16.125Z" fill="#0054A4" />
                </svg>


                <h1>Nuestras Oficinas</h1>
            </div>

            <div className='flex lg:gap-6 border lg:border-transparent border-[#E0EAF4]  flex-col lg:flex-row h-full rounded-xl'>
                <img src="img/oficinas.png" alt="" />

                <div className='space-y-4 p-5 lg:p-9 flex flex-col justify-between border_contact rounded-xl'>
                    <h2>Sede Central</h2>
                    <div className='subtitle'>
                       <div className='w-auto h-5'>
                         <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7578 19.625H12.0828C12.5609 19.1562 13.0859 18.6219 13.6109 18.0219C16.2453 14.9937 17.6328 11.7875 17.6328 8.75C17.6328 6.46251 16.7241 4.26871 15.1066 2.6512C13.4891 1.0337 11.2953 0.125 9.00781 0.125C6.72032 0.125 4.52652 1.0337 2.90902 2.6512C1.29152 4.26871 0.382813 6.46251 0.382812 8.75C0.382813 13.4375 3.57969 17.3656 5.93281 19.625H2.25781C1.95944 19.625 1.6733 19.7435 1.46232 19.9545C1.25134 20.1655 1.13281 20.4516 1.13281 20.75C1.13281 21.0484 1.25134 21.3345 1.46232 21.5455C1.6733 21.7565 1.95944 21.875 2.25781 21.875H15.7578C16.0562 21.875 16.3423 21.7565 16.5533 21.5455C16.7643 21.3345 16.8828 21.0484 16.8828 20.75C16.8828 20.4516 16.7643 20.1655 16.5533 19.9545C16.3423 19.7435 16.0562 19.625 15.7578 19.625ZM2.63281 8.75C2.63281 7.05925 3.30446 5.43774 4.50001 4.24219C5.69555 3.04665 7.31706 2.375 9.00781 2.375C10.6986 2.375 12.3201 3.04665 13.5156 4.24219C14.7112 5.43774 15.3828 7.05925 15.3828 8.75C15.3828 11.8719 13.5172 14.6937 11.9422 16.5031C11.0489 17.5311 10.067 18.4785 9.00781 19.3344C7.9486 18.4785 6.96669 17.5311 6.07344 16.5031C4.50781 14.6937 2.63281 11.8719 2.63281 8.75ZM9.00781 12.875C9.82366 12.875 10.6212 12.6331 11.2995 12.1798C11.9779 11.7266 12.5066 11.0823 12.8188 10.3286C13.131 9.57482 13.2127 8.74542 13.0536 7.94525C12.8944 7.14508 12.5015 6.41008 11.9246 5.83318C11.3477 5.25629 10.6127 4.86342 9.81256 4.70426C9.01239 4.5451 8.18299 4.62679 7.42924 4.939C6.6755 5.25121 6.03126 5.77992 5.578 6.45827C5.12474 7.13663 4.88281 7.93415 4.88281 8.75C4.88281 9.84402 5.31741 10.8932 6.091 11.6668C6.86458 12.4404 7.9138 12.875 9.00781 12.875ZM9.00781 6.875C9.37865 6.875 9.74117 6.98497 10.0495 7.19099C10.3578 7.39702 10.5982 7.68986 10.7401 8.03247C10.882 8.37508 10.9191 8.75208 10.8468 9.1158C10.7744 9.47951 10.5959 9.8136 10.3336 10.0758C10.0714 10.338 9.73732 10.5166 9.37361 10.589C9.00989 10.6613 8.63289 10.6242 8.29028 10.4823C7.94767 10.3404 7.65483 10.1 7.44881 9.79169C7.24278 9.48335 7.13281 9.12084 7.13281 8.75C7.13528 8.25348 7.33361 7.778 7.68471 7.4269C8.03581 7.0758 8.51129 6.87746 9.00781 6.875Z" fill="#0054A4" />
                        </svg>
                        </div>

                        <p>Calle 53 Este y Av. 3ra. Sur - Edificio Victoria Plaza, Obarrio, Piso 3.</p>
                    </div>
                    <div className='subtitle'>
                       <div className='w-auto h-5'>
                         <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8563 2.45936C11.8943 2.3165 11.9602 2.18255 12.0501 2.06517C12.14 1.94779 12.2521 1.84928 12.3801 1.77527C12.5081 1.70126 12.6495 1.65321 12.796 1.63385C12.9426 1.6145 13.0916 1.62423 13.2344 1.66249C14.6968 2.05665 16.0302 2.82778 17.1012 3.89879C18.1722 4.9698 18.9433 6.30317 19.3375 7.76561C19.3758 7.90843 19.3855 8.05738 19.3661 8.20396C19.3468 8.35053 19.2987 8.49186 19.2247 8.61985C19.1507 8.74784 19.0522 8.85999 18.9348 8.94989C18.8174 9.03978 18.6835 9.10565 18.5406 9.14374C18.446 9.17001 18.3482 9.18264 18.25 9.18124C18.0025 9.17982 17.7623 9.09752 17.566 8.94688C17.3696 8.79624 17.2279 8.58552 17.1625 8.34686C16.873 7.26547 16.3038 6.27938 15.5122 5.48779C14.7206 4.6962 13.7345 4.12701 12.6531 3.83749C12.5103 3.7994 12.3763 3.73353 12.2589 3.64364C12.1416 3.55374 12.043 3.44159 11.969 3.3136C11.895 3.18561 11.847 3.04429 11.8276 2.89771C11.8083 2.75113 11.818 2.60218 11.8563 2.45936ZM20.0781 15.4625C19.9048 16.8196 19.2428 18.0671 18.2161 18.9713C17.1893 19.8756 15.8682 20.3746 14.5 20.375C6.85 20.375 0.625 14.15 0.625 6.49999C0.625381 5.13182 1.1244 3.81069 2.02864 2.78393C2.93288 1.75716 4.18035 1.09517 5.5375 0.921864C5.9407 0.871438 6.34934 0.954031 6.70131 1.15709C7.05328 1.36015 7.32933 1.67257 7.4875 2.04686L9.37188 6.43436C9.4963 6.71886 9.54775 7.02991 9.52156 7.33932C9.49537 7.64873 9.39236 7.94671 9.22187 8.20624L7.77813 10.4C8.41772 11.6087 9.40795 12.5956 10.6188 13.2312L12.7844 11.7875C13.0449 11.6155 13.344 11.5108 13.6549 11.483C13.9658 11.4552 14.2787 11.5051 14.5656 11.6281L18.9531 13.5125C19.3274 13.6707 19.6398 13.9467 19.8429 14.2987C20.046 14.6506 20.1286 15.0593 20.0781 15.4625ZM17.8 15.4625L13.8625 13.775L11.6875 15.2281C11.417 15.4071 11.1048 15.5132 10.7813 15.5362C10.4577 15.5592 10.1337 15.4983 9.84063 15.3594C8.02089 14.4781 6.54882 13.0126 5.65937 11.1969C5.51634 10.9053 5.45232 10.5812 5.4737 10.2572C5.49509 9.93307 5.60114 9.62026 5.78125 9.34999L7.225 7.13749L5.5375 3.19999C4.78336 3.36287 4.10779 3.77921 3.62333 4.37968C3.13886 4.98014 2.87476 5.72846 2.875 6.49999C2.87748 9.58237 4.10305 12.5378 6.28263 14.7174C8.4622 16.8969 11.4176 18.1225 14.5 18.125C15.2715 18.1252 16.0199 17.8611 16.6203 17.3767C17.2208 16.8922 17.6371 16.2166 17.8 15.4625ZM11.65 7.39061C12.1112 7.53348 12.5306 7.78656 12.872 8.12796C13.2134 8.46936 13.4665 8.8888 13.6094 9.34999C13.6827 9.57839 13.8266 9.77765 14.0203 9.91915C14.214 10.0606 14.4476 10.1371 14.6875 10.1375C14.8023 10.1371 14.9163 10.1182 15.025 10.0812C15.1657 10.0375 15.2964 9.96633 15.4095 9.87181C15.5226 9.77729 15.6158 9.6613 15.6838 9.53055C15.7518 9.3998 15.7932 9.25687 15.8056 9.11002C15.8181 8.96317 15.8013 8.81531 15.7562 8.67499C15.504 7.86844 15.0601 7.13501 14.4625 6.53745C13.865 5.93989 13.1315 5.49599 12.325 5.24374C12.0403 5.15423 11.7317 5.18148 11.4671 5.31949C11.2025 5.45751 11.0036 5.69498 10.9141 5.97968C10.8246 6.26437 10.8518 6.57296 10.9898 6.83756C11.1278 7.10217 11.3653 7.3011 11.65 7.39061Z" fill="#0054A4" />
                        </svg>
                        </div>

                        <p>504-3400 / 504-3401</p>
                    </div>
                    <div className='subtitle'>
                       <div className='w-auto h-5'>
                         <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.877464 14.4965 1.0758 14.972 1.4269 15.3231C1.778 15.6742 2.25348 15.8725 2.75 15.875H19.25C19.7465 15.8725 20.222 15.6742 20.5731 15.3231C20.9242 14.972 21.1225 14.4965 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM17.1125 2.375L11 7.97187L4.8875 2.375H17.1125ZM3.125 13.625V3.80938L10.2406 10.325C10.447 10.5168 10.7183 10.6233 11 10.6233C11.2817 10.6233 11.553 10.5168 11.7594 10.325L18.875 3.80938V13.625H3.125Z" fill="#0054A4" />
                        </svg>
                        </div>

                        <p>central@tribunaltributario.gob.pa</p>
                    </div>

                    <button className="outline gap-4 w-auto lg:mr-auto center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9398 1V9.125C11.9398 9.37364 11.841 9.6121 11.6652 9.78791C11.4894 9.96373 11.2509 10.0625 11.0023 10.0625C10.7537 10.0625 10.5152 9.96373 10.3394 9.78791C10.1636 9.6121 10.0648 9.37364 10.0648 9.125V3.26562L1.66636 11.6641C1.48945 11.8387 1.25088 11.9366 1.0023 11.9366C0.753726 11.9366 0.515152 11.8387 0.338239 11.6641C0.250839 11.577 0.181492 11.4735 0.134175 11.3595C0.0868573 11.2456 0.0625 11.1234 0.0625 11C0.0625 10.8766 0.0868573 10.7544 0.134175 10.6405C0.181492 10.5265 0.250839 10.423 0.338239 10.3359L8.73668 1.9375H2.8773C2.62866 1.9375 2.3902 1.83873 2.21439 1.66291C2.03857 1.4871 1.9398 1.24864 1.9398 1C1.9398 0.75136 2.03857 0.512903 2.21439 0.337087C2.3902 0.161272 2.62866 0.0625 2.8773 0.0625H11.0023C11.2509 0.0625 11.4894 0.161272 11.6652 0.337087C11.841 0.512903 11.9398 0.75136 11.9398 1Z" fill="#0054A4" />
                        </svg>
                        Abrir Mapa
                    </button>
                </div>
            </div>

            


        </div>
    )
}
