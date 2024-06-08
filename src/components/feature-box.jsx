export const FeatureBox = () => {
    const boxData = [
      {
        img: 'https://i.imgur.com/C3v8CR5.png',
        heading: 'Presentation Design',
        text: 'Lorem ipsum dolor sit, amet consectetur earum quos odit dignissimos quae vel ut'
      },
      {
        img: 'https://i.imgur.com/VPkBGUg.png',
        heading: 'Audio - Visual Production',
        text: 'Lorem ipsum dolor sit, amet consectetur earum quos odit dignissimos quae vel ut'
      },
      {
        img: 'https://i.imgur.com/IQPhvOq.png',
        heading: 'Translation Services',
        text: 'Lorem ipsum dolor sit, amet consectetur earum quos odit dignissimos quae vel ut'
      },
      {
        img: 'https://i.imgur.com/dozgcGO.png',
        heading: 'Graphic Design',
        text: 'Lorem ipsum dolor sit, amet consectetur earum quos odit dignissimos quae vel ut'
      },
      {
        img: 'https://i.imgur.com/VM3Q6pX.png',
        heading: 'Research & Analytics',
        text: 'Lorem ipsum dolor sit, amet consectetur earum quos odit dignissimos quae vel ut'
      },
      {
        img: 'https://i.imgur.com/BCBpPzY.png',
        heading: 'Data Processing',
        text: 'Lorem ipsum dolor sit, amet consectetur earum quos odit dignissimos quae vel ut'
      }
    ]
  
    return (
      <>
      {boxData.map((box, index) => (
        <div key={index} className="bg-[#112949] p-2 rounded-xl w-60 sm:w-60 h-48 mx-auto">
            <div className="flex items-center space-x-3 m-3">
              <img src={box.img} alt="" className="w-11" />
              <div className="text-[#33a3cf] text-[1.1rem] font-medium leading-tight">{box.heading}</div>
            </div>
            <div className="text-white px-3">{box.text}</div>
          </div>
        ))}
      </>
    )
  }
  