import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "./sec2.scss"
import { FreeMode, Pagination } from 'swiper/modules';

const Section2 = () => {
  return (
    <>
   <div className='section3'>
    <div className='text'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h6 className='text-center'>GUESTS SAYS</h6>
                    <h2 className='text-center'>Our Satisfied Guests says</h2>

                </div>
            </div>
        </div>

    </div>
   <div className='container'>
        <div className='row'>
       <div >
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
          
        }}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
         
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div>
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div>
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div> 
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div>
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div>
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div>
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div>
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div>
    
     <div className='col-xl-4 col-12'>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     <SwiperSlide>
            <div className='card'>
                <div className='images'><img src='https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp'></img></div>
                <div className='icon'>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }} ></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarIcon>
                    <StarHalfIcon style={{ fontSize: '15px',color:"#ffb400" }}></StarHalfIcon>
                </div>
            <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className='text-center'>Dennis Green</h5>
                <h6 className='text-center'>Guestes from italy`</h6>
            </div>
        </SwiperSlide>
     </div>
    
      </Swiper>
       </div>
        </div>

      </div>
   </div>
    </>
  )
}

export default Section2