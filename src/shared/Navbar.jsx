import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo/logo.svg';
import CartIcon from '../assets/images/icon/cart.svg';
import { useForm } from 'react-hook-form';
import { GoSearch } from 'react-icons/go';
import HeaderBtn from '../components/HeaderComponents/HeaderBtn';
import useAuth from '@/Hooks/useAuth';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import SideBarNav from './SideBarNav';

function Navbar() {
  const { role } = useAuth();
  const { register, handleSubmit } = useForm();
  const [isOpen, setOpen] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };

  const navLinks = [
    {
      path: '/service',
      title: 'HealthCare Service',
    },
    {
      path: '/howitworks',
      title: 'How it works',
    },
    {
      path: '/faq',
      title: 'FAQ',
    },
    {
      path: '/auth/login',
      title: 'Login',
    },
  ];

  return (
    <>
      <header className="py-[13px] px-5 md:px-9 flex justify-between bg-headerBg fixed xl:sticky top-0 left-0 w-full z-[50] h-[75px] xl:h-auto">
        <div className="flex items-center justify-between">
          {/* header left  */}
          <div className="flex items-center gap-10">
            {/* logo  */}
            <div>
              <Link to={'/'}>
                <div className="size-12 md:size-[70px]">
                  <img
                    data-aos="zoom-up"
                    data-aos-duration="2000"
                    className="w-full h-full object-cover"
                    src={Logo}
                    alt="Logo"
                  />
                </div>
              </Link>
            </div>
            {/* menus  */}
            <ul className="xl:flex items-center gap-[30px] hidden">
              {navLinks?.map((navLink) => (
                <li
                  key={navLink?.path}
                  data-aos="zoom-up"
                  data-aos-duration="2000"
                >
                  <NavLink to={navLink?.path} className="menu-item">
                    {navLink?.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* header right  */}
        <div
          data-aos="zoom-left"
          data-aos-duration="2000"
          className="flex items-center gap-[18px]"
        >
          {/* search  */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-full md:w-[350px]"
          >
            <input
              {...register('search')}
              type="text"
              name="search"
              placeholder="Search your remdies"
              className="py-[13px] px-6 bg-white w-full text-sm rounded-[40px] text-black focus:outline-none font-semibold"
            />
            <button
              type="submit"
              className="absolute top-[50%] right-[20px] h-6 w-6 translate-y-[-50%] text-[20px] text-headerSearchbarPlaceHolder"
            >
              <GoSearch />
            </button>
          </form>
          {/* cart  */}
          <div data-aos="zoom-left" data-aos-duration="2000">
            <Link
              to={
                role == 'user'
                  ? '/dashboard/user/user-homepage'
                  : role == 'doctor'
                  ? '/dashboard/doctor/homepage'
                  : role == 'pharmacist'
                  ? '/dashboard/pharmacist/homepage'
                  : '/'
              }
              className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full"
            >
              <img className="w-7 h-7" src={CartIcon} alt={CartIcon} />
            </Link>
          </div>
          {/* header btn  */}
          <div
            data-aos="zoom-left"
            data-aos-duration="2000"
            className="hidden xl:block"
          >
            <Link to={'/auth/signup'}>
              <HeaderBtn text="Sign Up" />
            </Link>
          </div>

          {/* Hamburger */}
          <div className="xl:hidden">
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </header>
      {/* sidebar */}
      <SideBarNav isOpen={isOpen} setOpen={setOpen} navLinks={navLinks} />
    </>
  );
}

export default Navbar;
