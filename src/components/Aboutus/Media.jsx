import React from 'react';
import newsBackgroundImage from '../../assets/newbg.png'; // Background image for the page

const Media = () => {
  return (
    <div className="relative min-h-screen ">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center w-[100%] h-[800px] mb-[100px]"  
    style={{ backgroundImage: `url(${newsBackgroundImage})` }}
  >
   
  </div>

  <div className="space-y-6 max-w-8xl mx-auto">

      {/* Content Wrapper */}
      <div className="container mx-auto p-6 text-black relative z-10 pt-32">
        <h1 className="text-4xl font-bold text-center mb-8">
          Latest News 
        </h1>

        {/* News Section */}
        <div className="space-y-6">
          <div className="p-4">
            <h2 className="text-2xl font-semibold">🌿 Vasundhara Launches Massive Tree Plantation Drive</h2>
            <p className="text-lg mt-2">
              Vasundhara has initiated a large-scale tree plantation drive across [location/region], aiming to plant over [number] trees this season. This effort is a step toward combating deforestation and improving local biodiversity.
            </p>
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-semibold">🏫 Schools Join Hands with Vasundhara for Green Initiatives</h2>
            <p className="text-lg mt-2">
              As part of its Trees in Schools program, Vasundhara has partnered with [number] schools to plant saplings, educate students on sustainability, and inspire the next generation of environmental advocates.
            </p>
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-semibold">🌱 Vasundhara Expands Its Seed Bank Initiative</h2>
            <p className="text-lg mt-2">
              The organization has successfully collected and preserved native seeds through its seed bank program, ensuring the conservation of local plant species for future reforestation projects.
            </p>
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-semibold">📢 Community Awareness Campaigns See Record Participation</h2>
            <p className="text-lg mt-2">
              Recent awareness programs conducted by Vasundhara saw an overwhelming response, with [number] participants learning sustainable practices and pledging to contribute to environmental conservation.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Media;
