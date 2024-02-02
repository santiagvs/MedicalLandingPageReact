import { specialties } from "./constants"

export const SpecialtiesSection = () => {

  return (
    <section className="mt-20">
      <h2 className="font-semibold text-4xl">
        Dedicated to provide the best treatment.
      </h2>

      <p className="mt-8 text-lg text-[302E2E] w-3/4">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
      </p>

      <ul className="flex justify-between mt-14">
        {specialties.map(({ title, img }) => (
          <li key={title}>
            <div className="relative">
              <img src={img} alt={title} />
              <div className="bg-primary font-semibold rounded-xl absolute -bottom-10 left-8 text-white flex flex-col px-8 py-4">
                <span>For your health</span>
                <span className="text-2xl">{title}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </section>
  )
}
