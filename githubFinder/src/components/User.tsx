import { UserProps } from "../types/user";

import {MdLocationPin} from "react-icons/md"

import { Link } from "react-router-dom";
import classes from './User.module.css'

const User = ({
    login,
    avatar_url,
    followers,
    following,
    location,
}: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
            <p>
                <MdLocationPin />
                <span>{location}</span>
            </p>
            )}
            <div>
                <div>
                    <p>seguidores</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>seguindo:</p>
                    <p>{following}</p>
                </div>
            </div>
            <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
        </div>
    )
};

export default User;