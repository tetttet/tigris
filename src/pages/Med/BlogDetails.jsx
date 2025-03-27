// В компоненте BlogDetails.js
import { useLocation, Link } from 'react-router-dom';
import Breadcrumb from '../../components/elements/Breadcrumb';
import Navbar from '../../components/Navbar/Navbar';
import { MedFooter } from '../../components/Footer/MedFooter';


const BlogDetails = () => {
  const location = useLocation();
  const { img, desc, headlines } = location.state || {}; 

  return (
    <>
      <Navbar />
      <Breadcrumb pageName='Blog Details' pageDescription='Blog Details' />
      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[80px]">
        <div className="container px-20">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]"
                data-wow-delay=".1s"
              >
                <img
                  src={img}
                  alt="image"
                  width={1288}
                  height={500}
                  className="h-full w-full object-cover rounded-2xl object-center"
                />
                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-gray-800 to-transparent">
                  <div className="flex flex-wrap items-center p-4 pb-4 sm:p-8">
                    <div className="mb-4 mr-5 flex items-center md:mr-10">
                      <p className="text-base font-medium text-white">
                        <Link href="/#" className="text-white hover:opacity-70">
                          {headlines}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-1'>
            <h1 className="text-3xl font-semibold">
              {desc}
            </h1>
            <p className='mt-5 text-gray-600'>
              {headlines}
            </p>
          </div>
        </div>
      </section>
      <MedFooter />
    </>
  );
};

export default BlogDetails;