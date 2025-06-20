'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { HiOutlineArrowLongRight, HiOutlineMapPin } from 'react-icons/hi2'

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className='h-screen flex items-center py-24 xl:py-0'
		>
			<div className='container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible'>
				<div className='w-full'>
					<div className='flex flex-col xl:flex-row gap-6'>
						{/* info text */}
						<div className='flex-1 xl:w-[600px] flex flex-col gap-12'>
							{/* text */}
							<div>
								<h2 className='h2 mb-6'>
									Get In <span className='text-accent'>Touch</span>
								</h2>
								<p className='max-w-[460px]'>
									Ready to bring your vision to life? Whether it’s a project, a
									question, or feedback, I’d be happy to connect. Let’s make
									things happen!
								</p>
							</div>
							{/* info */}
							<div className='flex flex-col gap-8 mb-6 xl:mb-0'>
								{/* phone */}
								<div className='flex items-center gap-4 text-lg'>
									<span className='text-accent'>
										<HiOutlinePhone className='text-2xl' />
									</span>
									<span>+48 518 370 768</span>
								</div>
								{/* email */}
								<div className='flex items-center gap-4 text-lg'>
									<span className='text-accent'>
										<HiOutlineMail className='text-2xl' />
									</span>
									<span>george.kirber@gmail.com</span>
								</div>
								{/* location */}
								<div className='flex items-center gap-4 text-lg'>
									<span className='text-accent'>
										<HiOutlineMapPin className='text-2xl' />
									</span>
									<span>Wrocław, PL</span>
								</div>
							</div>
						</div>
						{/* form */}
						<div className='flex-1'>
							<form className='flex flex-col gap-6 items-start'>
								{/* first and last name */}
								<div className='flex flex-col xl:flex-row gap-6 w-full'>
									<div className='w-full'>
										<Label htmlFor='name'>
											Firstname <span className='text-accent'>*</span>
										</Label>
										<Input
											id='firstname'
											name='firstname'
											placeholder='First name'
											required
										/>
									</div>
									<div className='w-full'>
										<Label htmlFor='name'>
											Lastname <span className='text-accent'>*</span>
										</Label>
										<Input
											id='lastname'
											name='lastname'
											placeholder='Last name'
											required
										/>
									</div>
								</div>
								{/* email */}
								<div className='w-full'>
									<Label htmlFor='name'>
										Email <span className='text-accent'>*</span>
									</Label>
									<Input
										id='email'
										name='email'
										placeholder='youremail@gmail.com'
										required
									/>
								</div>
								{/* select */}
								<div className='w-full'>
									<Label htmlFor='name'>
										I&apos;m interested in{' '}
										<span className='text-accent'>*</span>
									</Label>
									<Select name='service' required>
										<SelectTrigger
											id='service'
											className='w-full !h-12 bg-white/5 border-white/10 px-4'
										>
											<SelectValue placeholder='Choose here' />
										</SelectTrigger>
										<SelectContent className='bg-black border-white/20'>
											<SelectItem value='webdev'>Web Development</SelectItem>
											<SelectItem value='uiux'>UI & UX Design</SelectItem>
											<SelectItem value='logo'>Search Engine Optimization</SelectItem>
										</SelectContent>
									</Select>
								</div>
								{/* textarea */}
								<div className='w-full'>
									<Label htmlFor='name'>
										Message <span className='text-accent'>*</span>
									</Label>
									<Textarea
										id='message'
										name='message'
										placeholder='Write your message..'
										className='min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50'
									/>
								</div>
								{/* btn */}
								<button className='btn btn-lg btn-accent'>
									<div className='flex items-center gap-3'>
										<span className='font-medium'>Send message</span>
										<HiOutlineArrowLongRight className='text-xl' />
									</div>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Contact
