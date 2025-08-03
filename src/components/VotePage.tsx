
import Handshake from '../assets/dabas.jpg'
import { MdEmail } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import VotingFeed from './VotingFeed';
import { Link } from 'react-router-dom';


export default function VotePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
            <div className="bg-white p-6 rounded xl:max-w-3xl shadow-lg text-center max-w-5xl w-full">
                <h1 className="text-xl font-bold mb-4 uppercase">
                    제발, 여러분의 투표가 필요합니다
                </h1>

                <div className="flex justify-center mb-6">
                    <img
                        src={Handshake}
                        alt="Hand reaching out"
                        className="object-cover rounded h-full w-full"
                    />
                </div>

                <div className="text-base mb-2 text-gray-600 flex items-center justify-center gap-2">
                    <input type="radio" checked={true} onChange={(e) => e.preventDefault()} style={{ color: 'dodgerblue' }}></input> 총 투표수:
                    <strong>4678</strong> ~에서 <strong>5688</strong>
                </div>

                <div className="relative w-full h-full bg-gray-200 rounded overflow-hidden mb-3">
                    <div style={{ background: 'dodgerblue', width: (4678 / 5688) * 100 + '%', height: '6.5px' }}></div>
                </div>

                <div className="text-lg font-bold text-gray-700 mb-4 flex items-center justify-center gap-2">
                    <FaCheck /> 승리에 대한 총 투표수: <strong>1010</strong>
                </div>

                <Link to={'/login'} className="bg-red-500 w-fit mx-auto hover:bg-red-600 text-white px-4 py-2 rounded transition mb-6 flex items-center justify-center gap-2">
                    함께 투표하세요 <MdEmail />
                </Link>
            </div>

            <VotingFeed />
        </div>
    );
}
