import { JourneyItem, JourneyProps } from '@/types'

const journey: JourneyItem[] = [
	{
		years: '2021 - 2022',
		role: 'Python Developer',
		institution: 'YPracticum',
	},
	{
		years: '2024 - 2025',
		role: 'Frontend Developer',
		institution: 'IT-Incubator',
	},
	{
		years: '2025 - Present',
		role: 'Trainee',
		institution: 'IT-Incubator',
	},
]

const Journey: React.FC<JourneyProps> = ({ className }) => {
	return (
		<div className={`flex flex-col ${className || ''}`}>
			<h2 className='h2 mb-8'>
				Education & <span className='text-accent'>Experience</span>
			</h2>
			{journey.map((item, index) => {
				const { institution, role, years } = item
				return (
					<div key={index} className='flex items-center gap-12 w-full'>
						{/* bullets */}
						<div className='flex flex-col w-max justify-center items-center'>
							<div className='w-3 h-3 bg-accent rounded-full'></div>
							<div className='w-[1px] h-[180px] bg-white/10'></div>
						</div>
						{/* text */}
						<div className='max-w-[500px]'>
							<p className='mb-6 text-lg text-white/50'>{years}</p>
							<h4 className='h4 mb-2'>{role}</h4>
							<p className='text-lg text-white/50'>{institution}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Journey
