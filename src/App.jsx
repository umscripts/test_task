import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import menuIcon from './assets/icons/menu.svg';
import bellaIcon from './assets/icons/bella.svg';
import supportIcon from './assets/icons/support.svg';
import bellIcon from './assets/icons/bell.svg';
import calanderIcon from './assets/icons/calander.svg';
import userIcon from './assets/icons/user.svg';
import scrollIcon from './assets/icons/scroll.svg';
import dollarIcon from './assets/icons/dollar.svg';
import profitIcon from './assets/icons/profit.svg';
import lossIcon from './assets/icons/loss.svg';
import customer2Icon from './assets/icons/customer2.svg';
import calander2Icon from './assets/icons/calander2.svg';
import logoIcon from './assets/icons/logo.svg';
import { pages, appointments, products, team, recentAppointments } from './Data/Data';
import Chart from './Data/Chart';

function App() {
  const [sidebar, setsidebar] = useState(false);
  const [value, setValue] = useState(new Date());

  return (
    <div className='flex transition-all duration-300'>
      <div className={`shadow-2xl h-screen overflow-scroll overflow-x-hidden p-3 lg:p-5 bg-white z-10 ${sidebar ? 'fixed left-0 w-4/6 sm:w-4/12 lg:w-3/12' : 'absolute -left-80'}`}>
        {/* --------------Side Bar Design------------------ */}
        <div className='flex justify-between items-center'>
          <img src={logoIcon} alt="nystyle" className='w-36 h-14' />
          <img src={menuIcon} alt="menu" className='w-9 h-6 cursor-pointer rotate-180' onClick={() => setsidebar(false)} />
        </div>
        <div>
          <ul>
            {pages.map((page, index) => (
              <li key={index} className='flex px-3 lg:px-5 py-2 lg:py-4 my-3 lg:my-5 rounded-xl gap-5 text-xl items-center hover:bg-Primary hover:text-white hover:cursor-pointer group'>
                <img src={page.image} alt="dashboard" className='w-6 group-hover:filter group-hover:invert' />{page.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* --------------Main Body Section------------------- */}
      <div className='w-full px-5 sm:px-10 lg:px-14'>
        {/* ------------Navbar Design--------------------------- */}
        <div className='flex justify-between items-center py-5'>
          <div>
            {!sidebar && <img src={menuIcon} alt="menu" className='w-9 h-6 cursor-pointer' onClick={() => setsidebar(true)} />}
          </div>
          <div className='flex gap-1 sm:gap-10 items-center'>
            <div className='flex gap-1 sm:gap-4 items-center'>
              <img src={bellaIcon} alt="bella" className='w-12 sm:w-16 cursor-pointer' />
              <div>
                <p className='font-bold sm:text-xl cursor-pointer'>Bella Femina</p>
                <p className='text-xs sm:text-lg'>Joined 2 months ago</p>
              </div>
            </div>
            <img src={supportIcon} alt="support" className='w-10 sm:w-12 h-8 sm:h-10 cursor-pointer' />
            <img src={bellIcon} alt="bell" className='w-8 sm:w-10 h-8 sm:h-10 cursor-pointer' />
          </div>
        </div>
        <div className='flex justify-between items-center my-14 '>
          <p className='text-lg sm:text-2xl md:text-3xl'>Good Morning, <span className='font-semibold block sm:inline'>Bella Famina</span></p>
          <button className='bg-Primary text-white sm:px-5 p-3 sm:py-3 flex gap-2 sm:gap-5 items-center text-sm sm:text-[16px] md:text-lg rounded-lg font-semibold'><img src={calanderIcon} alt="calander" className='w-5 sm:w-6' />New Appointment</button>
        </div>
        {/* ------------------Cards Section---------------------------- */}
        <div className='sm:flex justify-between gap-5 md:gap-10 my-14 space-y-5 sm:space-y-0'>
          <div className='custom-card'>
            <div className='custom-card-content text-[#007930]'><img src={dollarIcon} alt="dollar" className='w-7 md:w-8' />&#36;1682</div>
            <div className='custom-card-body'>Total Revenue<img src={profitIcon} alt="profit" className='w-10 md:w-auto' /></div>
          </div>
          <div className='custom-card'>
            <div className='custom-card-content text-[#007930]'><img src={customer2Icon} alt="dollar" className='w-7 md:w-8' />60</div>
            <div className='custom-card-body'>Total Customers<img src={profitIcon} alt="profit" className='w-10 md:w-auto' /></div>
          </div>
          <div className='custom-card'>
            <div className='custom-card-content text-[#F52525]'><img src={calander2Icon} alt="dollar" className='w-7 md:w-8 ' />78</div>
            <div className='custom-card-body'>Total Appointments<img src={lossIcon} alt="profit" className='w-10 md:w-auto' /></div>
          </div>
        </div>
        {/* ------------------Graph Section---------------------------- */}
        <div>
          <div className='sm:flex sm:justify-between my-5'>
            <p className='text-Secondary sm:text-xl font-semibold'>Revenue</p>
            <div className='flex gap-1 sm:gap-5 items-center justify-end'>
              <ol className='list-disc flex gap-5 sm:gap-10 text-sm sm:text-lg'>
                <li className='text-[#5679FF]'>Sales</li>
                <li className='text-Primary'>Appointments</li>
              </ol>
              <select id="month-select" className='outline-none cursor-pointer text-xs md:text-lg opacity-50'>
                <option value="This Month" className='outline-none'>Last 12 Month</option>
                <option value="Past Month" className='outline-none'>Last 6 Month</option>
              </select>
            </div>
          </div>
          {/* ---------------Import Chart Component---------------------- */}
          <Chart />
        </div>
        {/* -----------------------Calander Section------------------------------ */}
        <div className='grid  sm:grid-cols-2 gap-5 my-32 '>
          <div className='flex justify-center w-11/12 sm:w-full items-center'>
            <Calendar
              onChange={setValue}
              value={value}
              view="month"
              minDetail="month"
              navigationLabel={({ date }) => date.toLocaleDateString('en-US', { month: 'long' })}
              next2Label={null}
              prev2Label={null}
              className="w-10/12"
            />
          </div>
          {/* -----------------Dynamic Appointments Data--------------------------- */}
          <div className='w-full space-y-3'>
            <p className='text-Secondary font-semibold text-lg my-7'>Today's Appointments</p>
            {appointments.map((appointment, index) => (
              <div key={index}>
                <div className='bg-Primary flex text-white gap-2 p-3 md:p-5 rounded-2xl'>
                  <img src={appointment.image} alt="menicure" />
                  <div className='w-full text-xs md:text-sm flex flex-col justify-between'>
                    <p className='opacity-85'>10:30 AM - 11:00 AM</p>
                    <p className='text-[16px] md:text-lg'>Menicure</p>
                    <div className='flex opacity-85'><img src={userIcon} alt="user" />Fabiha Arshad</div>
                  </div>
                  <div className='flex flex-col justify-center items-center text-3xl'>
                    <p className='text-2xl md:text-4xl'>13</p>
                    <p className='opacity-85 text-sm'>July</p>
                  </div>
                </div>
              </div>
            ))}
            <img src={scrollIcon} alt="scroll" className='mx-auto cursor-pointer' />
          </div>
          {/* -----------------Dynamic Products Data--------------------------- */}
          <div className='shadow-lg px-3 md:px-5 rounded-2xl'>
            <div className='flex justify-between p-3 md:p-5 text-Secondary'>
              <p className='font-semibold text-sm md:text-lg lg:text-xl'>Top Products</p>
              <select id="month-select" className='outline-none cursor-pointer text-xs md:text-sm opacity-70'>
                <option value="This Month" className='outline-none'>This Month</option>
                <option value="Past Month" className='outline-none'>Past Month</option>
              </select>
            </div>
            {
              products.map((product, index) => (
                <div key={index} className='border-b border-Secondary border-opacity-10 p-3 md:p-5'>
                  <div className='flex gap-2'>
                    <img src={product.image} className='w-14 md:w-16' />
                    <div className='flex flex-col justify-around'>
                      <p className='text-Primary text-lg md:text-xl'>{product.service}</p>
                      <p className='text-Secondary opacity-70'>{product.count} Services</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {/* -----------------Dynamic Team Members Data--------------------------- */}
          <div className='shadow-lg px-3 md:px-5 rounded-2xl'>
            <div className='flex justify-between p-3 md:p-5 text-Secondary'>
              <p className='font-semibold text-sm md:text-lg lg:text-xl'>Top Team Members</p>
              <select id="month-select" className='outline-none cursor-pointer text-xs md:text-sm opacity-70'>
                <option value="This Month" className='outline-none'>This Month</option>
                <option value="Past Month" className='outline-none'>Past Month</option>
              </select>
            </div>
            {
              team.map((team, index) => (
                <div key={index} className='border-b border-Secondary border-opacity-10 p-3 md:p-5'>
                  <div className='flex gap-2'>
                    <img src={team.image} className='w-14 md:w-16' />
                    <div className='flex flex-col justify-around'>
                      <p className='text-Primary text-lg md:text-xl'>{team.name}</p>
                      <p className='text-Secondary opacity-70'>{team.count} Appointments</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* -----------------Dynamic Appointments Data--------------------------- */}
        <div className='sm:px-5 md:px-10'>
          <p className='font-semibold text-xl md:text-2xl text-Secondary my-7 '>Recent Appointments</p>
          <table className='w-full mx-auto'>
            <thead>
              <tr className='bg-[#F6F6F6]'>
                <th className='font-normal text-left py-1 md:py-3 px-3 md:px-5 text-sm sm:text-[16px] md:text-lg text-Secondary opacity-70 '>Service</th>
                <th className='custom-table-head'>Employee</th>
                <th className='custom-table-head'>Sale</th>
                <th className='custom-table-head'>Earnings</th>
              </tr>
            </thead>
            <tbody>
              {
                recentAppointments.map((recentAppointment, index) => (
                  <tr className='border-b text-center'>
                    <td className='flex gap-1 sm:gap-3 p-2 sm:p-5'>
                      <img src={recentAppointment.image} className='w-10 sm:w-12 md:w-14' />
                      <div className='flex flex-col justify-around text-left'>
                        <p className='text-Primary text-sm md:text-lg font-medium'>{recentAppointment.service}</p>
                        <p className='text-xs md:text-sm text-Secondary'>{recentAppointment.date}</p>
                      </div>
                    </td>
                    <td className='text-sm md:text-lg text-Secondary'>{recentAppointment.name}</td>
                    <td className='text-xs sm:text-sm md:text-lg text-Secondary'>{recentAppointment.sale}</td>
                    <td className='text-[#5679FF] text-sm'><span className='bg-[#F2F7F7] p-2 rounded-md'>&#36;{recentAppointment.earning}</span></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;