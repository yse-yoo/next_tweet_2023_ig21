import Link from "next/link";

const NavbarLink = ({href, label, onClick}) => {
    return (
        <Link
            href={href}
            className="hidden md:inline-block p-3 text-black"
            >
            {label}
        </Link>
    );
}

export default NavbarLink;