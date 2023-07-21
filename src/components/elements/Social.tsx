import classNames from "classnames";
import { SiDiscord, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const contacts = [
    {
        icon: SiLinkedin,
        user: "Caio Souza",
        link: "https://www.linkedin.com/in/souzs/"
    },
    {
        icon: SiGmail,
        user: "souzsdev@gmail.com",
        link: "mailto:souzsdev@gmail.com"
    },
    {
        icon: SiGithub,
        user: "Souzzs",
        link: "https://github.com/c-souzs"
    },
    {
        icon: SiDiscord,
        user: "souzzs#4789",
        link: "https://discord.com/invite/BsnqGK6e"
    },
]

type SocialProps = {
    type: "big" | "small"
}

const Social = ({ type }: SocialProps) => {
    return (
        <ul className={classNames("flex flex-wrap justify-center items-center", {"gap-12": type === "big"}, {"gap-4": type === "small"})}>
            {
                contacts.map(({icon, user, link}) => {
                    const Icon = icon;

                    return (
                        <li key={user}>
                            {user === "souzsdev@gmail.com" ? (
                                <a href={link} className="block text-blue-100 bg-black-100 rounded-full p-3 transition-shadow hover:shadow-icon-contact">
                                    <Icon size={type === "big" ? 24 : 18}/>
                                </a>
                            ) :  (
                                <Link to={link} className="block text-blue-100 bg-black-100 rounded-full p-3 transition-shadow hover:shadow-icon-contact" target="_blank">
                                    <Icon size={type === "big" ? 24 : 18}/>
                                </Link>
                            )}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Social;