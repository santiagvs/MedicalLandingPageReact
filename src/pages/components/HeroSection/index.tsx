import DoctorCrossingArms from "../../../assets/images/doctor.png"
import HeadHeartIcon from "../../../assets/icons/head-heart.png"

export const HeroSection = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-2">

        <div className="-translate-y-6 relative">
          <img src={DoctorCrossingArms} />
          <div className="bg-white absolute top-32 -left-16 w-52 p-4 rounded-xl flex items-center gap-x-2">
            <img src={HeadHeartIcon} />
            <span>
              More than 10K
              Patients treated!
            </span>
          </div>
        </div>

        <div>
          <h1 className="flex flex-col gap-y-3 w-11/12">
            <span className="text-primary font-semibold text-xl">
              Welcome to Medico Healthcare
            </span>
            <span className="text-7xl font-semibold leading-snug">
              Your Journey to
              Better Health
              Starts Here
            </span>
          </h1>

          <a className='bg-primary px-6 py-4 rounded-xl font-semibold text-white mt-8 inline-block'>
            Discover More
          </a>
        </div>
      </div>
    </section>
  )
}
