import About from '../components/About';
import AnimatedHeading from '../components/AnimatedHeading';
import { LinkArrow } from '../components/Icons';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ProfilePic from '../../public/images/profile/ProfilePic.png';
import AnimatedText from '../components/AnimatedText';
export default function Home() {
	return (
		<>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light pt-32">
				<Layout className="pt-0 md:!pt-16 sm:!pt-8">
					<div className="flex items-center justify-between w-full lg:flex-col ">
						<div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
							<AnimatedHeading
								text="Turning Vision Into Reality With Code And Design."
								className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
							/>
							<p className="my-4 text-base font-medium md:text-sm sm:text-xs">
								As a skilled full-stack developer, I am dedicated to turning
								ideas into innovative blockchain applications. Explore my latest
								projects and articles, showcasing my expertise in blockchain
								development and decentralized solutions.
							</p>
							<div className="flex items-center self-start mt-2 lg:self-center">
								<Link
									href="/dummy.pdf"
									target={'_blank'}
									className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light transition-all ease-in-out duration-300 md:p-2 md:px-4 md:text-base "
									download={true}
								>
									Resume <LinkArrow className={'w-6 ml-1'} />
								</Link>
								<Link
									href="mailto:abcd@gmail.com"
									target={'_blank'}
									className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
								>
									Contact
								</Link>
							</div>
						</div>
						<div className="w-1/2 md:w-full">
							<Image
								src={ProfilePic}
								alt=""
								className="w-full h-auto lg:hidden md:inline-block md:w-full"
								priority
								sizes="(max-width : 768px) 100vw,(max-width : 1200px) 50vw, 50vw"
							/>
						</div>
					</div>
				</Layout>
			</main>
			<About />
			<Projects />
		</>
	);
}
