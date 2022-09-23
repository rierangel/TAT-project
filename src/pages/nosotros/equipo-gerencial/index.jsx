import React from 'react'
import Layer from 'src/components/Layer'
import Equipo from 'src/components/About/Equipo'


export default function page() {
  return (
    <Layer>

      <div className='subtitle'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.25 0.5H2.75C2.15326 0.5 1.58097 0.737053 1.15901 1.15901C0.737053 1.58097 0.5 2.15326 0.5 2.75V25.25C0.5 25.8467 0.737053 26.419 1.15901 26.841C1.58097 27.2629 2.15326 27.5 2.75 27.5H25.25C25.8467 27.5 26.419 27.2629 26.841 26.841C27.2629 26.419 27.5 25.8467 27.5 25.25V2.75C27.5 2.15326 27.2629 1.58097 26.841 1.15901C26.419 0.737053 25.8467 0.5 25.25 0.5ZM9.5 12.875C9.5 11.985 9.76392 11.115 10.2584 10.3749C10.7529 9.63491 11.4557 9.05814 12.2779 8.71754C13.1002 8.37695 14.005 8.28783 14.8779 8.46147C15.7508 8.6351 16.5526 9.06368 17.182 9.69302C17.8113 10.3224 18.2399 11.1242 18.4135 11.9971C18.5872 12.87 18.4981 13.7748 18.1575 14.5971C17.8169 15.4193 17.2401 16.1221 16.5001 16.6166C15.76 17.1111 14.89 17.375 14 17.375C12.8077 17.3713 11.6652 16.896 10.8221 16.0529C9.97901 15.2098 9.50371 14.0673 9.5 12.875ZM5.66094 25.25C6.23295 23.8318 7.15743 22.583 8.34688 21.6219C9.94763 20.3297 11.9428 19.6249 14 19.6249C16.0572 19.6249 18.0524 20.3297 19.6531 21.6219C20.8426 22.583 21.7671 23.8318 22.3391 25.25H5.66094ZM25.25 25.25H24.7297C24.2294 23.6571 23.3803 22.1958 22.2443 20.9722C21.1083 19.7486 19.7139 18.7936 18.1625 18.1766C19.2682 17.3104 20.0762 16.1208 20.4739 14.7737C20.8715 13.4266 20.839 11.9889 20.3808 10.6611C19.9227 9.33335 19.0618 8.18156 17.918 7.36627C16.7742 6.55097 15.4046 6.1128 14 6.1128C12.5954 6.1128 11.2258 6.55097 10.082 7.36627C8.93824 8.18156 8.0773 9.33335 7.61915 10.6611C7.16101 11.9889 7.12849 13.4266 7.52613 14.7737C7.92377 16.1208 8.73176 17.3104 9.8375 18.1766C8.28608 18.7936 6.89168 19.7486 5.75568 20.9722C4.61968 22.1958 3.77064 23.6571 3.27031 25.25H2.75V2.75H25.25V25.25Z" fill="#0054A4" />
        </svg>
        <h1>Equipo Gerencial</h1>
      </div>
      <Equipo />

    </Layer>
  )
}