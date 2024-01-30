import PhoneIcon from '../../assets/icons/phone.svg'
import HealthcareIcon from '../../assets/icons/healthcare.png'
import { menuItems } from './consts'

export const Header = () => {
  return (
    <header className="py-6 bg-white flex items-center justify-between px-7">
      <div className='flex items-center gap-x-24'>
        <span className='flex items-center gap-x-2 font-semibold text-2xl'>
          <img src={HealthcareIcon} />
          Medico
        </span>

        <ul className="flex items-center gap-x-6">
          {menuItems.map(({ label, link }) => (
            <li className='font-medium' key={link}>{label}</li>
          ))}
        </ul>
      </div>


      <div className="flex items-center gap-x-6 ">
        <span className="flex items-center gap-x-2 font-semibold">
          <img src={PhoneIcon} />
          1005-346-272
        </span>

        <a className='bg-primary px-4 py-3 rounded-xl font-semibold text-white'>Appointment</a>
      </div>
    </header>
  )
}
