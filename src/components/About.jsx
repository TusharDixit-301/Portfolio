import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
// import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import profilePic from '../../public/images/profile/profile.jpg';

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, motionValue, value]);

	useEffect(() => {
		springValue.on('change', (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
		<>
			<main id='about' className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout className="pt-16">
					<AnimatedText
						text="Passion Fuels Purpose!"
						className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
					/>
					<div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
						<div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
								Biography
							</h2>
							<p className="font-medium">
							Hello, I am Tushar, a fullstack blockchain developer with a passion for crafting secure, efficient, and decentralized solutions. With 1 years of experience in the field, I constantly seek innovative approaches to materialize my clients' visions using blockchain technology. My focus lies in creating beautiful, functional, and user-centered digital experiences on the blockchain platform. Let's revolutionize the world together with the power of blockchain!
							</p>
							<p className="my-4 font-medium">
							As a fullstack blockchain developer, I firmly believe that design goes beyond aesthetics; it's about addressing challenges and crafting intuitive, delightful experiences for users in the decentralized world. Just as in traditional development, solving problems efficiently and user-centrically remains paramount in the blockchain realm. Let's merge the power of blockchain technology with exceptional design to create transformative and user-friendly solutions.{' '}
							</p>
							
						</div>
						<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-3 xl:col-span-4 md:order-1 md:col-span-8">
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-sky-700" />
							<Image
								src={profilePic}
								alt=""
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width : 768px) 100vw,(max-width : 1200px) 50vw, 33vw"
							/>
						</div>
						<div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold sm:text-5xl xs:text-4xl">
									<AnimatedNumbers value={5} />+
								</span>
								<h2 className="text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
									Staisfied clients
								</h2>
							</div>

							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold  sm:text-5xl xs:text-4xl  ">
									<AnimatedNumbers value={8} />+
								</span>
								<h2 className="text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
									Projects
								</h2>
							</div>

							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold  sm:text-5xl xs:text-4xl ">
									<AnimatedNumbers value={1} />+
								</span>
								<h2 className="text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
									Years of experience
								</h2>
							</div>
						</div>
					</div>
					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	);
};

export default about;
