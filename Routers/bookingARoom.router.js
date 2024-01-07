import express from 'express';
import {createRoomDetails,getroomDetails,bookingARoom,bookedData,listAllCustomer,manyTimesCustomerBooked} from '../Controllers/bookingARoom.controller.js';

const router = express.Router();
router.post('/createroom',createRoomDetails)
router.get('/getroom',getroomDetails)
router.post('/to-book-hall',bookingARoom)
router.get('/bookedrm',bookedData)
router.get('/listallcustomers',listAllCustomer)
router.get('/many-times',manyTimesCustomerBooked)

export default router;