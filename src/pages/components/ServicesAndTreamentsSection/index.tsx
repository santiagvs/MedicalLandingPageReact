import { services } from "./constants"
import RightArrow from "../../../assets/icons/arrow-right.svg"

export const ServicesAndTreatmentsSection = () => {
  return (
    <section className="mt-48">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-primary font-semibold">
            SERVICES AND TREATMENTS
          </span>
          <h2 className="text-5xl mt-2 leading-snug">More than 40 specialties <br /> and health care services</h2>
        </div>

        <a className='bg-primary px-6 py-4 rounded-xl font-semibold text-white mt-8 inline-block'>
          See All Services
        </a>
      </div>
      <ul className="grid grid-cols-2 gap-x-10 gap-y-10 px-8 mt-10">
        {services.map(({ icon, title, description }) => (
          <li key={title}>
            <div className="bg-white grid grid-cols-4 p-10 rounded-xl relative">
              <div className="col-span-1">
                <img src={icon} alt={title} />
              </div>
              <div className="col-span-3 flex flex-col gap-y-6 pb-6">
                <h3 className="text-3xl">{title}</h3>
                <p className="text-lg">{description}</p>
              </div>
              <a href="" className="absolute right-0 bottom-0 bg-[#D9D9D9] py-3 px-6 rounded-br-xl">
                <img src={RightArrow} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
