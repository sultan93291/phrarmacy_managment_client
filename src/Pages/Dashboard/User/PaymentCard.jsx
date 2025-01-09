import card1 from '@/assets/images/cards/card-1.png';

const PaymentCard = () => {
  return (
    <div
      className="h-72 bg-cover bg-center bg-no-repeat font-dmsans rounded-2xl p-5 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${card1})` }}
    >
      <div className='mt-10'>
        <p className="text-white text-2xl flex gap-2">
          **** **** **** <span className="text-3xl">2333</span>
        </p>
      </div>

      <div className='flex mt-10 items-center justify-between w-full text-white'>
        <div className='text-lg fo'>
          <p className='text-sm'>Card Holder Name</p>
          <p className='font-semibold'>Sumon Khan </p>
        </div>

        <div className='text-lg fo'>
          <p className='text-sm'>Expiry Date</p>
          <p className='font-semibold'>02/30</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
