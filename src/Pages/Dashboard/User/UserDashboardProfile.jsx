import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';
import { useState } from 'react';
import UserCalendar from '@/components/Dashboard/User/UserCalendar';
import userPhoto from '@/assets/images/user.png';
const UserDashboardProfile = () => {
  const genderOptions = [
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
    { id: 'others', label: 'Others' },
  ];

  const [imagePreview, setImagePreview] = useState(userPhoto);
  const [fileName, setFileName] = useState('No File Chosen');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  const [selectedGender, setSelectedGender] = useState('male');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div className="bg-white rounded-md px-16 py-10">
      <DashboardTitle title="Personal Information" />

      {/* form */}
      <div className="mt-12">
        <div className="font-inter">
          <form action="" className="md:flewo flex flex-col gap-6 md:gap-12">
            <div className="flex w-full flex-col gap-6 md:flex-row 2xl:gap-24  ">
              <div className="md:w-1/2">
                <div className="flex flex-col gap-3 md:gap-5">
                  <label htmlFor="name" className="text-sm md:text-base">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="rounded-lg border border-black/10 px-4 py-3 text-sm placeholder:text-black/50 focus:outline-none md:text-base md:placeholder:text-sm 2xl:px-10 2xl:py-5"
                    defaultValue="Erich"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex flex-col gap-3 md:gap-5">
                  <label htmlFor="email" className="text-sm md:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="rounded-lg border border-black/10 px-4 py-3 text-sm placeholder:text-black/50 focus:outline-none md:text-base 2xl:px-10 2xl:py-5"
                    defaultValue="davidlee21@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 md:flex-row 2xl:gap-24">
              <div className="md:w-1/2">
                <div className="flex flex-col gap-3 md:gap-5">
                  <label htmlFor="phone" className="text-sm md:text-base">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    defaultValue="+8801761624031"
                    className="rounded-lg border border-black/10 px-4 py-3 text-sm placeholder:text-black/50 focus:outline-none md:text-base 2xl:px-10 2xl:py-5"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center md:w-1/2">
                <div className="flex flex-col gap-3 md:gap-5">
                  <label htmlFor="date" className="text-sm md:text-base">
                    Date of Birth
                  </label>
                  <div className="w-full">
                    <UserCalendar />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 md:flex-row 2xl:gap-24 2xl:pr-32">
              <div>
                <div className="flex flex-col gap-3 md:gap-5">
                  <label htmlFor="" className="text-sm md:text-base">
                    Gender
                  </label>
                  <div className="flex items-center gap-4 md:mt-4 md:gap-8">
                    <div className="flex items-center space-x-4">
                      {genderOptions.map(({ id, label }) => (
                        <div
                          key={id}
                          className="flex items-center gap-2 md:gap-4"
                        >
                          <input
                            type="radio"
                            name="gender"
                            id={id}
                            value={id}
                            checked={selectedGender === id}
                            onChange={handleGenderChange}
                            className="size-4 md:size-6 text-blue-600 focus:ring-blue-500"
                            aria-label={label}
                          />
                          <label
                            htmlFor={id}
                            className="cursor-pointer text-sm md:text-base select-none"
                          >
                            {label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <div className="flex w-full flex-col gap-3 md:gap-5">
                <label htmlFor="address" className="text-sm md:text-base">
                  Address
                </label>

                <textarea
                  rows="6"
                  className="rounded-lg border border-black/10 px-4 py-3 text-sm placeholder:text-black/50 focus:outline-none md:text-base 2xl:px-10 2xl:py-8"
                  name="address"
                  id="address"
                >
                  1234 Elm Street,Los Angeles, CA 90001,United States
                </textarea>
              </div>
            </div>

            <div className="flex w-full">
              <div className="flex w-full flex-col gap-2 md:gap-5">
                <label htmlFor="photo">Photo</label>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                  <div className="h-[105px] w-[100px] overflow-hidden rounded">
                    <img
                      className="image-preview h-full w-full object-cover"
                      src={imagePreview}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-5 overflow-hidden rounded-xl border border-[#C2C2C2] md:gap-12 lg:pr-32 2xl:pr-72">
                      <label
                        htmlFor="photo"
                        className="cursor-pointer rounded-lg bg-[#C2C2C2] px-5 py-2 text-sm md:text-base"
                      >
                        Choose File
                      </label>
                      <input
                        type="file"
                        name="photo"
                        id="photo"
                        onChange={handleFileChange}
                        className="imageInput hidden"
                      />
                      <span className="imageFileName text-sm md:text-base">
                        {fileName}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 md:pt-8">
                  <button
                    type="submit"
                    className="rounded-[40px] border border-white bg-primary px-5 py-2 font-inter text-sm text-white transition duration-500 hover:border-primary hover:bg-white hover:text-primary md:text-base"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* password form */}
      <div className="mb-6 rounded-2xl bg-white md:mb-10 lg:mb-20    2xl:pt-14">
        <div className="tmd:text-2xl font-inter text-xl font-semibold text-[#222E48]">
          <h2>Password Updates</h2>
        </div>

        <div className="pt-4 font-inter md:pt-8">
          <form action="" className="flex flex-col gap-12">
            <div className="flex w-full flex-col gap-6 md:gap-8">
              <div className="w-full">
                <div className="flex flex-col gap-3 md:gap-5">
                  <label htmlFor="currentPass" className="text-sm md:text-base">
                    Current password
                  </label>
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="currentPass"
                      id="currentPass"
                      className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm placeholder:text-sm placeholder:text-black/50 focus:outline-none md:text-base md:placeholder:text-base 2xl:px-10 2xl:py-5"
                      placeholder="Type your password"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-3 md:gap-5">
                  <label htmlFor="newPass" className="text-sm md:text-base">
                    New Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="newPass"
                      id="newPass"
                      className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm placeholder:text-sm placeholder:text-black/50 focus:outline-none md:text-base md:placeholder:text-base 2xl:px-10 2xl:py-5"
                      placeholder="Type your password"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-3 md:gap-5">
                  <label htmlFor="confirmPass" className="text-sm md:text-base">
                    Confirm New Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="confirmPass"
                      id="confirmPass"
                      className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm placeholder:text-sm placeholder:text-black/50 focus:outline-none md:text-base md:placeholder:text-base 2xl:px-10 2xl:py-5"
                      placeholder="Type your password"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-[40px] border border-white bg-primary px-5 py-2 font-inter text-sm text-white transition duration-500 hover:border-primary hover:bg-white hover:text-primary md:text-base"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardProfile;
