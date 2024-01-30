import PinIcon from '../../assets/icons/pin.svg'
import MailIcon from "../../assets/icons/email.svg"
import WhatsAppIcon from "../../assets/icons/whatsapp.svg"

export const TopHeader = () => {
  return (
    <div className="bg-primary p-3 text-white">
      <div className="custom-container flex justify-between">
        <ul className="flex items-center gap-x-6">
          <li className='flex items-center gap-x-2'>
            <img src={PinIcon} />
            90919 Madie run Apt. 790
          </li>
          <li className='flex items-center gap-x-2'>
            <img src={MailIcon} />
            medico@health.care
          </li>
        </ul>

        <a href="#" className='underline flex items-center gap-x-2'>
          <img src={WhatsAppIcon} />
          Connect on WhatsApp
        </a>
      </div>
    </div>
  )
}
