const room = [{
    NumberOfSeatsAvailable : 200,
    Amenities_in_room : "A/C or NON A/c, Attached Bathroom, Tv with Cable, Free Wifi, Dining options",
    price_1_hour : 1500

}]

const data = [
    {
        Room_Name : "vs Room",
        roomId : 1,
        Booked_Status : "booked",
        customerName : "sowmiya.v",
        Date : "01/01/2024",
        startTime : "10am",
        endTime : "11am"
    },
    {
        Room_Name : "vs Room",
        roomId : 2,
        Booked_Status : "booked",
        customerName : "venkat.c",
        Date : "10/01/2024",
        startTime : "8pm",
        endTime : "11pm"
    },
    {
        Room_Name : "Party Room",
        roomId : 3,
        Booked_Status : "booked",
        customerName : "magizhini.v",
        Date : "20/01/2024",
        startTime : "8am",
        endTime : "12pm"
    },
    {
        Room_Name : "Party Room",
        roomId : 4,
        Booked_Status : "booked",
        customerName : "akizhan.v",
        Date : "22/01/2024",
        startTime : "5pm",
        endTime : "7pm"
    },
    
    {
        Room_Name : "vs Room",
        roomId : 5,
        Booked_Status : "booked",
        customerName : "venkat.c",
        Date : "19/01/2024",
        startTime : "5pm",
        endTime : "7pm"
    },
    
   
]



//getting room details
export const getroomDetails = (req,res)=>{
    res.status(200).json({message:"Welcome to Hall Booking App 🎉",data:room})
}
//create a room
export const createRoomDetails = (req,res)=>{
    room.push(req.body)
    res.status(200).json({message:"Room Booked",data:req.body})
}

//booking a room
export const bookingARoom  = (req,res)=>{
    console.log("booking room")

    const booking_Room = {
        
        roomId : data.length+1,
        customerName : req.body.customerName,
        Date : req.body.Date,
        startTime : req.body.startTime,
        endTime : req.body.endTime
    }
    
    const bookingDate =  req.body.Date
    // console.log(bookingDate)
    const dateDetail  = data.find(ele=>ele.Date == bookingDate)
    // console.log(typeof  dateDetail)
    // console.log(dateDetail?.Date)
    if(bookingDate != dateDetail?.Date){
        // console.log("true")
        data.push(booking_Room)

    return res.status(200).json({message:"Room Booked",data:booking_Room})
}
    else{
        // console.log("false")
        return res.status(404).json({message:"This Date not Available Already Booked"})
    }

}

//list all room with booked data
export const bookedData = (req,res)=>{
   res.status(200).json({message:"Room Booked Details",data:data})
}

//list all customers with booked data
export const listAllCustomer = (req,res)=>{
    res.status(200).json({message:"List all Customers with Booked Data",data:data})
}

//list how many times a customer booked
export const manyTimesCustomerBooked = (req,res)=>{
   const customerDetail = data.find(ele=>ele.name == ele.name)
   let a = []
   let b ={}
   for(let i =0;i<data.length;i++){
    
    if(a.includes(data[i].customerName)){
     b[data[i].customerName]={
        ...data[i],
        nooftimesbooked:(b[data[i].customerName]?.nooftimesbooked || 1)+1
     }
    }
    else{
        a.push(data[i].customerName)
    }
   }

   console.log("customer",customerDetail.customerName)
   res.status(200).json({message:"Many times booked Customer Detail",data:b})
}

