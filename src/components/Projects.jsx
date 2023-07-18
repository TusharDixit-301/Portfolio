import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import BlockChat3 from '../../public/images/projects/BlockChat3.png';
import NFTMarketplace from '../../public/images/projects/NFTMarketplace1.png';
import RollIt from '../../public/images/projects/RollIt.png';

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
	return (
		<article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-sky-700 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
			<Link
				href={link}
				target="_blank"
				className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
			>
				<Image
					src={img}
					alt={title}
					className="w-full h-auto"
					priority
					sizes="(max-width : 768px) 100vw,(max-width : 1200px) 50vw, 50vw"
				/>
			</Link>
			<div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
				<span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base ">
					{type}
				</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2"
				>
					<h2 className="my-2 w-full text-left text-4xl font-bold dark:text-white sm:text-sm">
						{title}
					</h2>
				</Link>
				<p className="my-2 font-medium text-dark dark:text-white sm:text-sm">
					{summary}
				</p>
				<div className="mt-2 flex items-center">
					<Link href={github} target="_blank" className="w-10">
						<GithubIcon />
					</Link>

					<Link
						href={link}
						target="_blank"
						className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-[3px] border-solid border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light sm:px-4 sm:text-base"
					>
						Visit Project
					</Link>
				</div>
			</div>
		</article>
	);
};

const Project = ({ type, title, img, link, github, summary }) => {
	return (
		<article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-sky-700 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
			<Link
				href={link}
				target="_blank"
				className="w-full cursor-pointer overflow-hidden rounded-lg"
			>
				<Image src={img} alt={title} className="w-full h-auto" />
			</Link>
			<div className="w-full flex flex-col items-start justify-between mt-4 ">
				<span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
					{type}
				</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2"
				>
					<h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
						{title}
					</h2>
				</Link>
				<p className="my-2 font-medium text-dark dark:text-white sm:text-sm">
					{summary}
				</p>

				<div className="w-full justify-between mt-2 flex items-center">
					<Link
						href={link}
						target="_blank"
						className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-[3px] border-solid border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light md:text-base"
					>
						Visit
					</Link>
					<Link href={github} target="_blank" className="w-8 md:w-6">
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};

const projects = () => {
	return (
		<>
			<main
				id="projects"
				className="w-full mb-16 flex flex-col items-center justify-center dark:text-light"
			>
				<Layout className="pt-16">
					<AnimatedText
						text="Imagination Trumps Knowledge!"
						className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
					/>
					<div
						className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 
					"
					>
						<div className="col-span-12 hover:scale-105 transition-all duration-500 ease-in-out">
							<FeaturedProjects
								type="Featured Project"
								title="WOW Marketplace"
								summary="A NFT marketplace built on the zkSyncEra network, offering efficient and cost-effective transactions for digital assets. Empowering users with a seamless experience, it enables easy buying, selling, and trading of NFTs within a decentralized and secure ecosystem."
								img={NFTMarketplace}
								link="https://zk-sync-marketplace.vercel.app/"
								github="https://github.com/TusharDixit-301/zkSync-Marketplace"
							/>
						</div>

						<div className="col-span-6 sm:col-span-12 hover:scale-105 transition-all duration-500 ease-in-out">
							<Project
								summary="A web application that allows users to create and share their own custom memes. It also allows users to view and download memes created by other users."
								title="Roll It"
								img={RollIt}
								link="https://tushardixit-301.github.io/Roll-It/"
								github="https://github.com/TusharDixit-301/Roll-It"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12 hover:scale-105 transition-all duration-800 ease-in">
							<Project
								summary="Blockchat is a blockchain-based online chat service, ensuring secure and decentralized communication, preserving user privacy and data integrity."
								title="Blockchat"
								img={BlockChat3}
								link="https://block-chat.vercel.app/"
								github="https://github.com/TusharDixit-301/BlockChat"
							/>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
