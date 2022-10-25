import React from 'react'
import Layer from 'src/components/Layer'
import FileList from 'src/components/data_display/FileList'
import Buscador from 'src/components/data_display/Buscador'

export default function index() {
    return (
        <Layer>
            <div className="subtitle">
                <i>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.87199 0.493896C3.97689 0.493896 3.11844 0.849476 2.48551 1.48241C1.85257 2.11535 1.49699 2.97379 1.49699 3.8689V7.6294C1.49699 8.5245 1.85257 9.38295 2.48551 10.0159C3.11844 10.6488 3.97689 11.0044 4.87199 11.0044H5.625V16.5649C5.55396 16.6181 5.48679 16.6762 5.424 16.7389L1.23599 20.9254C1.06183 21.0995 0.923677 21.3062 0.829418 21.5338C0.73516 21.7613 0.686646 22.0051 0.686646 22.2514C0.686646 22.4977 0.73516 22.7415 0.829418 22.969C0.923677 23.1966 1.06183 23.4033 1.23599 23.5774L5.424 27.7654C5.59811 27.9396 5.80483 28.0777 6.03235 28.172C6.25987 28.2662 6.50373 28.3147 6.75 28.3147C6.99626 28.3147 7.24012 28.2662 7.46764 28.172C7.69516 28.0777 7.90188 27.9396 8.07599 27.7654L12.261 23.5774C12.3243 23.5148 12.383 23.4476 12.4365 23.3764H18.0075V24.1324C18.0075 24.5756 18.0948 25.0145 18.2644 25.424C18.434 25.8334 18.6826 26.2055 18.996 26.5189C19.3094 26.8323 19.6815 27.0809 20.0909 27.2505C20.5004 27.4201 20.9393 27.5074 21.3825 27.5074H25.1235C26.0186 27.5074 26.877 27.1518 27.51 26.5189C28.1429 25.8859 28.4985 25.0275 28.4985 24.1324V20.3749C28.4985 19.4798 28.1429 18.6213 27.51 17.9884C26.877 17.3555 26.0186 16.9999 25.1235 16.9999H21.3825C20.4874 16.9999 19.6289 17.3555 18.996 17.9884C18.3631 18.6213 18.0075 19.4798 18.0075 20.3749V21.1264H12.435C12.3818 21.0554 12.3237 20.9882 12.261 20.9254L8.07599 16.7404C8.01322 16.6772 7.94605 16.6186 7.875 16.5649V11.0044H8.63249C9.07571 11.0044 9.51458 10.9171 9.92405 10.7475C10.3335 10.5779 10.7056 10.3293 11.019 10.0159C11.3324 9.70248 11.581 9.33043 11.7506 8.92095C11.9202 8.51148 12.0075 8.07261 12.0075 7.6294V3.8689C12.0075 3.42568 11.9202 2.98681 11.7506 2.57734C11.581 2.16787 11.3324 1.79581 11.019 1.48241C10.7056 1.16901 10.3335 0.920413 9.92405 0.750803C9.51458 0.581193 9.07571 0.493896 8.63249 0.493896H4.87199ZM3.747 3.8689C3.747 3.57053 3.86552 3.28438 4.0765 3.0734C4.28748 2.86242 4.57363 2.7439 4.87199 2.7439H8.63249C8.93086 2.7439 9.21701 2.86242 9.42799 3.0734C9.63897 3.28438 9.75749 3.57053 9.75749 3.8689V7.6294C9.75749 7.92776 9.63897 8.21391 9.42799 8.42489C9.21701 8.63587 8.93086 8.7544 8.63249 8.7544H4.87199C4.57363 8.7544 4.28748 8.63587 4.0765 8.42489C3.86552 8.21391 3.747 7.92776 3.747 7.6294V3.8689ZM3.08999 22.2514L6.75 18.5944L10.4055 22.2514L6.75 25.9099L3.08999 22.2499V22.2514ZM21.381 19.2514H25.122C25.4204 19.2514 25.7065 19.3699 25.9175 19.5809C26.1285 19.7919 26.247 20.078 26.247 20.3764V24.1324C26.247 24.4308 26.1285 24.7169 25.9175 24.9279C25.7065 25.1389 25.4204 25.2574 25.122 25.2574H21.381C21.0826 25.2574 20.7965 25.1389 20.5855 24.9279C20.3745 24.7169 20.256 24.4308 20.256 24.1324V20.3749C20.256 20.0765 20.3745 19.7904 20.5855 19.5794C20.7965 19.3684 21.0826 19.2499 21.381 19.2499V19.2514Z" fill="#0054A4" />
                    </svg>

                </i>
                <h1>flujograma</h1>
            </div>
            <Buscador />
            <FileList />
        </Layer>
    )
}
