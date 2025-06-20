import { Stat, StatsProps } from '@/types'
import CountUp from 'react-countup'

const stats: Stat[] = [
	{
		value: 12,
		label: 'Mastered\nTechnologies',
		suffix: '+',
	},
	{
		value: 15,
		label: 'Сompleted\nProjects',
	},
]

const Stats: React.FC<StatsProps> = ({ className }) => {
	return (
		<div
			className={`flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12 ${className || ''}`}
		>
			{stats.map((stat, index) => (
				<div key={index} className='flex gap-4'>
					<div className='text-5xl font-bold text-accent flex'>
						<CountUp
							end={stat.value}
							duration={5}
							delay={2}
							className='block w-[60px]'
						/>
						{stat.suffix && <div>{stat.suffix}</div>}
					</div>
					<span className='whitespace-pre-line'>{stat.label}</span>
				</div>
			))}
		</div>
	)
}

export default Stats
