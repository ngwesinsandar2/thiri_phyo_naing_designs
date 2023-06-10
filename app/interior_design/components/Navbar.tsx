import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link_name: "Designs",
      link_url: "/"
    },
    {
      id: 2,
      link_name: "Services",
      link_url: "/"
    },
    {
      id: 3,
      link_name: "About us",
      link_url: "/"
    }
  ]

  return (
    <>
      <header className="">
        <div className="grid grid-cols-3 font-['Inder']">
          <div className="logo">
            <Image
              src="/assets/images/logo.svg"
              alt="Home Logo"
              width={100}
              height={100}
            />
          </div>

          <nav>
            <ul className="flex items-center justify-between">
              {
                links.map(link => {
                  return (
                    <li key={link.id}>
                      <Link href={link.link_url}>{link.link_name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

          <div className="profile justify-self-end">
            <div className="rounded-full bg-[var(--milk)] w-[80px] h-[80px] flex justify-center items-end">
              <Image
                className="rounded-full"
                src="/assets/images/avatar.svg"
                alt="Profile"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;