import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import router from 'next/router';

function Footer() {
	return (
		<div>
			{/* Upper Block of Footer */}
			<div className="h-1/2 w-full flex md:flex-row flex-col justify-center items-center shadow-inner  ">
				<div className="p-5">
					<ul>
						
						<div className="flex gap-6 justify-center mt-2">
							<FaInstagram className="text-2xl cursor-pointer 
							text-white hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer text-white first-letter:hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer text-white hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer text-white hover:text-red-600" />
						</div>
					</ul>
				</div>
			</div>

			{/* Lower Block of Footer */}
			<div className="flex flex-col justify-center items-center text-center  pb-5 ">
				<h4 className=" text-blue-500 font-semibold">
					© 2023-2024 All rights reserved | Build with{' '}
					<text className='text-red-600 hover:text-red-600 cursor-pointer text-lg "'> &nbsp; ❤  &nbsp;</text>by{' '}
					<span className="hover:text-blue-800 font-semibold cursor-pointer">
						Tushar Dixit
					</span>
				</h4>
			</div>
		</div>
	);
}

export default Footer;