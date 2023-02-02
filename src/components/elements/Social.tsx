import classNames from "classnames";
import { SiDiscord, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const contacts = [
    {
        icon: SiLinkedin,
        user: "Caio Souza",
        link: ""
    },
    {
        icon: SiGmail,
        user: "souzsdev@gmail.com",
        link: ""
    },
    {
        icon: SiGithub,
        user: "Souzzs",
        link: ""
    },
    {
        icon: SiDiscord,
        user: "souzzs#4789",
        link: ""
    },
]

type SocialProps = {
    type: "big" | "small"
}

const Social = ({ type }: SocialProps) => {
    return (
        <ul className={classNames("flex flex-wrap justify-between items-center", {"gap-12": type === "big"}, {"gap-4": type === "small"})}>
            {
                contacts.map(({icon, user, link}) => {
                    const Icon = icon;

                    return (
                        <li key={user}>
                            <Link to={link} className="block text-blue-100 bg-black-100 rounded-full p-3 transition-shadow hover:shadow-icon-contact">
                                <Icon size={type === "big" ? 24 : 18}/>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Social;