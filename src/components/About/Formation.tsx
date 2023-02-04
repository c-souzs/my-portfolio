const courses = [
    {
        name: "Curso técnico de informática integrado.",
        place: "IFMG - campus formiga",
        date: "2019 há 2021"
    },
    {
        name: "Curso de JavaScript e TypeScript do básico ao avançado.",
        place: "Udemy - Luiz Otávio",
        date: "2022"
    },
    {
        name: "Curso de react e redux com typescript.",
        place: "B7web - Bonikey",
        date: "2022"
    },
    {
        name: "Curso de NextJs com typescript e prisma.",
        place: "B7web - Boniey",
        date: "2023"
    },
    {
        name: "Graduação em Sistemas de informação",
        place: "UFLA",
        date: "2023 há atual"
    }
]

const Formation = () => {
    return (
        <div>
            <h5 className="font-poppins font-medium text-xl text-white-100 mb-7 flex items-center gap-2 before:w-4 before:h-1 before:bg-blue-100 before:inline-block before:rounded delayMediumReveal">Formação e cursos.</h5>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    courses.map(({name, date, place}, index) => {
                        return (
                            <li className="bg-black-200 rounded px-4 py-2 intervalCardReveal" key={index}>
                                <div className="flex justify-between gap-4 mb-2 font-poppins text-blue-100 font-semibold">
                                    <h6>{ name }</h6>
                                    <p className="text-sm opacity-50 text-right">{ date }</p>
                                </div>
                                <p className="text-white-50 font-roboto text-sm">{ place }</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Formation;