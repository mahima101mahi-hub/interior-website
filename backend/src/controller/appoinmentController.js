import Appoinment from "../model/appoinmentModel.js";

/* ================================
   CREATE APPOINTMENT + PAYMENT
================================ */
export async function Appo(req, res) {
  const {
    Name,
    Email,
    Phone,
    SelectTheme,
    SelectRoomType,
    AppointmentDate ,
    TimeSlot,
    Message,
    userId,
    PaymentMethod,
    upiId,
    cardNumber,
    expiry,
    cvv
  } = req.body;

  try {
    // ✅ BASIC VALIDATION
    if (!Name || !Email || !Phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!AppointmentDate ) {
      return res.status(400).json({ message: "Appointment date is required" });
    }

    if (!PaymentMethod) {
      return res.status(400).json({ message: "Select payment method" });
    }

    // 💳 PAYMENT VALIDATION
    if (PaymentMethod === "UPI" && !upiId) {
      return res.status(400).json({ message: "UPI ID required" });
    }

    if (
      PaymentMethod === "CARD" &&
      (!cardNumber || !expiry || !cvv)
    ) {
      return res.status(400).json({ message: "Card details required" });
    }

    // ⚠️ SECURITY NOTE
    console.log("⚠️ Avoid storing CVV in real applications");

    // ✅ CREATE APPOINTMENT
    const newAppointment = new Appoinment({
      Name,
      Email,
      Phone,
      SelectTheme,
      SelectRoomType,
      AppointmentDate,
      TimeSlot,
      Message,
      userId,
      PaymentMethod,
      upiId,
      cardNumber,
      expiry,
      cvv, // ❌ remove in real apps
      Status: "Confirmed" // auto confirm after payment
    });

    await newAppointment.save();

    return res.status(201).json({
      message: "Appointment booked successfully 🎉",
      data: newAppointment
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send("INTERNAL SERVER ERROR");
  }
}

/* ================================
   GET ALL APPOINTMENTS
================================ */
export async function GetAllAppoinment(req, res) {
  try {
    const data = await Appoinment.find();

    return res.status(200).json(data);

  } catch (error) {
    console.log(error);
    return res.status(500).send("INTERNAL SERVER ERROR");
  }
}

/* ================================
   GET APPOINTMENT BY ID
================================ */
export async function GetAppoinmentById(req, res) {
  const { id } = req.params;

  try {
    const data = await Appoinment.findById(id);

    if (!data) {
      return res.status(404).send("Appointment not found");
    }

    return res.status(200).json(data);

  } catch (error) {
    console.log(error);
    return res.status(500).send("INTERNAL SERVER ERROR");
  }
}

/* ================================
   DELETE APPOINTMENT
================================ */
export async function DeleteAppoinment(req, res) {
  const { id } = req.params;

  try {
    const data = await Appoinment.findByIdAndDelete(id);

    if (!data) {
      return res.status(404).send("Appointment not found");
    }

    return res.status(200).json({
      message: "Deleted successfully",
      data
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send("INTERNAL SERVER ERROR");
  }
}

/* ================================
   GET USER APPOINTMENTS
================================ */
export async function GetAllAppoinmentofUser(req, res) {
  try {
    const data = await Appoinment.find({
      userId: req.params.userId
    });

    return res.status(200).json(data);

  } catch (error) {
    console.log(error);
    return res.status(500).send("INTERNAL SERVER ERROR");
  }
}

/* ================================
   UPDATE STATUS
================================ */
export async function GetAppoinmentUpdates(req, res) {
  const { id } = req.params;

  try {
    const data = await Appoinment.findByIdAndUpdate(
      id,
      { Status: req.body.Status },
      { new: true }
    );

    if (!data) {
      return res.status(404).send("Appointment not found");
    }

    return res.status(200).json(data);

  } catch (error) {
    console.log(error);
    return res.status(500).send("INTERNAL SERVER ERROR");
  }
}