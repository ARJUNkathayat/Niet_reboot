import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../Utils/fireBase';
import { removeUser } from '../Utils/userSlice';
import { logo } from '../Utils/constants';

const BrowseHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            dispatch(removeUser());
        }).catch((error) => {
            console.error("Sign-out error:", error);
        });
    };

    const user = useSelector((store) => store.user);

    return (
        <div className="fixed top-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-50 flex justify-between items-center px-10">
            {/* Netflix Logo */}
            <img src={logo} alt="Netflix Logo" className="w-32 cursor-pointer" onClick={() => navigate('/')} />

            {/* Right Side: Profile & Sign Out */}
            <div className="flex items-center space-x-5">
                {/* User Profile */}
                <div className="relative flex items-center cursor-pointer">
                    <img 
                        className="w-12 h-12 rounded-md object-cover"
                        src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6"
                        alt="User Profile"
                    />
                    <h3 className="text-white ml-3 hidden sm:block">{user?.name}</h3>
                </div>

               
                <button 
                    onClick={handleSignOut} 
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300">
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default BrowseHeader;
