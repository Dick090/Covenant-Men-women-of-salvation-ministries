import React, { useState } from 'react'
import './Form.css'
import { json } from 'react-router-dom';
import { Date } from './Data';
import Loading from '../../src/Loading';


function Form(props) {
  const [First_Name, setFirst_Name] = useState('');
  const [Last_Nmae, setLast_Nmae] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [State_country, setState_country] = useState('');
  const [City_country, setCity_country] = useState('');
  const [ErrFirst_Name, setErrFirst_Name] = useState('');
  const [ErrLast_Nmae, setErrLast_Nmae] = useState();
  const [Errgeneral, setErrgeneral] = useState()
  const [ErrEmail, setErrEmail] = useState();
  const [ErrAddress, setErrAddress] = useState();
  const [Errphone_number, setErrphone_number] = useState();
  const [ErrState_country, setErrState_country] = useState();
  const [ErrCity_country, setErrCity_country] = useState();
  const [bankSelected, setbankSelected] = useState('')
  const [ErrbankSelected, setErrbankSelected] = useState()
  const [bankFee, setbankFee] = useState()
  const [Give, setGive] = useState(false)
  const [apple, setapple] = useState(true)
  const [AMoutToGive, setAMoutToGive] = useState()
  const [ErrAMoutToGive, setErrAMoutToGive] = useState()
  const [bankseem, setbankseem] = useState(false)
  const [isokgo, setisokgo] = useState(false)
  const [showNote, setshowNote] = useState(true)
  const on = false
console.log(AMoutToGive);
  setTimeout(() => {
    setErrAddress('');
    setErrCity_country('')
    setErrFirst_Name('')
    setErrLast_Nmae('')
    setErrCity_country('')
    setErrState_country('')
    setErrEmail('')
    setErrphone_number('')
    setErrbankSelected('')
    setErrgeneral('')
    setisokgo(false)
  }, 8000);

  const Users = {
    id: '',
    FirstName: '',
    LastName: '',
    Amount: '',
    Email: '',
    Password: '',
    MobileNumber: '',
    PresentAddress: '',
    State: '',
    City: '',
  }

  const State = JSON.stringify([
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
  ])

  const bankChage = () => {

    Date.map((e) => {
      if (e.name == bankSelected) {
        console.log(e.name, e.code)
        setbankFee(e.code)
      }
    })
  }

  const onchangeEvnt = () => {
    Date.map((e) => (

      console.log(e.name, e.code)
    ))

  }

const Submit_Give = () =>{
    if (
      First_Name === "" ||
      Last_Nmae === "" ||
      Email === "" ||
      phone_number === "" ||
      AMoutToGive === "" ||
      Address === "" || City_country === "") {

      setErrgeneral("Please Fill All The Required Fields❌❌❌");
    }

    else if (First_Name.length < 2) {
      setErrFirst_Name('Input your first name.❌❌❌');

    }
    else if (Last_Nmae.length < 2) {
      setErrLast_Nmae('Input your last Name.❌❌❌');

    }
    else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      setErrEmail("check your email.❌❌❌");
    }
    else if (State_country == '') {
      setErrState_country('select  your State.❌❌❌ ')

    }
    else if (City_country.length < 2) {
      setErrCity_country('input city of your state.❌❌❌ ')

    }
    else if (AMoutToGive <=150) {
      setAMoutToGive('input the amount❌❌❌ ')
    }
    else {
      Users.FirstName = First_Name;
      Users.LastName = Last_Nmae;
      Users.Email = Email;
      Users.MobileNumber = phone_number;
      Users.PresentAddress = Address;
      Users.State = State_country;
      Users.City = City_country;
      setisokgo(true);
    }




}

  const Submit_applications = () => {
    if (
      First_Name === "" ||
      Last_Nmae === "" ||
      Email === "" ||
      phone_number === "" ||
      Address === "" || City_country === "") {

      setErrgeneral("Please Fill All The Required Fields❌❌❌");
    }

    else if (First_Name.length < 2) {
      setErrFirst_Name('Input your first name.❌❌❌');

    }
    else if (Last_Nmae.length < 2) {
      setErrLast_Nmae('Input your last Name.❌❌❌');

    }
    else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      setErrEmail("check your email.❌❌❌");
    }
    else if (State_country == '') {
      setErrState_country('select  your State.❌❌❌ ')

    }
    else if (City_country.length < 2) {
      setErrCity_country('input city of your state.❌❌❌ ')

    }
    else if (bankSelected == '') {
      setErrbankSelected('select card issued bank❌❌❌ ')

    }
    else {
      Users.FirstName = First_Name;
      Users.LastName = Last_Nmae;
      Users.Email = Email;
      Users.MobileNumber = phone_number;
      Users.PresentAddress = Address;
      Users.State = State_country;
      Users.City = City_country;
      setisokgo(true);
    }

  }



  const StateList = JSON.parse(State)
  const checkdd = ['ghthd', 'fkfkfkf']

  // Lord, teach us to be kind in heart, so that love, grace, and charity flow forth like a river. Give us a generosity that reflects your own, through Christ, our Lord. Amen. 

  // Lord, our Peace-Bringer, it is good to give. But merely giving does not mean we have peace about it. We may give, but if our hearts are troubled and we do not give in faith, then our works mean nothing. It is as if we are clanging a loud cymbal. Therefore, calm our troubled hearts so that we may give joyfully and in faith, without reservation. May this giving let our light shine before all, and bring all glory to your name. Amen.


  // Almighty and most merciful God, we remember before you the convert men/women of salvation ministrie and other Donators that remenmber all poor and neglected persons whom others have forgotten: the homeless and the destitute, the old and the sick, and all who have none to care for them.Bless,Protect,New Life in them , Heal them to heal those who are broken in body or spirit, and to turn their sorrow into joy. Grant this, Father, for the love of your Son, who for our sake became poor, Jesus Christ our Lord. Amen.
  return (
    <div>
      <div className="general_form_holer">

        <div className="up_part_holer_fo">
          <div className="up_img_ghtn">
            {props.appleFrom === true ?
              <img src="./public/images/church.jpeg" alt="" /> : ''

            }
            {props.GiveFrom == true ? <img src="./public/images/Givefrom.jpg" alt="" /> : ''
            }
            {console.log(props)}
          </div>
          <br />
          <div className="text_side_uPH">


            {props.appleFrom == true ? <h4>Pray For the Coverant Men/Women of salvation Ministrie and other Donators</h4> : ""}

            {props.GiveFrom == true ? <h4> Pray with Us ,Lord teach us to be kind in heart, so that love, grace, and charity flow forth like a river</h4> : "dgdg"}

            {props.GiveFrom == true ? <p>Lord, our Peace-Bringer, it is good to give. But merely giving does not mean we have peace about it. We may give, but if our hearts are troubled and we do not give in faith, then our works mean nothing. It is as if we are clanging a loud cymbal.{showNote ? <p onClick={() => { setshowNote(false) }} className="finish_prayer">Finish prayer....</p> :
              "Therefore, calm our troubled hearts so that we may give joyfully and in faith, without reservation. May this giving let our light shine before all, and bring all glory to your name. Amen"}

              .</p>

              : ''}

            {props.appleFrom == true ? <p>Almighty and most merciful God, we remember before you the convert men/women of salvation ministrie and other Donators that remenmber all poor and neglected persons whom others have forgotten: the homeless and the destitute, the old and the sick, and all who have none to care for them.{showNote ? <span onClick={() => { setshowNote(false) }} className="finish_prayer">Finish prayer....</span> :
              "Bless,Protect,New Life in them , Heal them to heal those who are broken in body or spirit, and to turn their sorrow into joy. Grant this, Father, for the love of your Son, who for our sake became poor, Jesus Christ our Lord. Amen"} .</p> : ''}



          </div>
        </div>



        <div className="main_form_now"  >
          <form action="" className='form_control'>
            <div className="input_holdeer">
              <div className="input_one_Care">
                <input onChange={(e) => { setFirst_Name(e.target.value), setshowNote(true) }} type="text" className='inputs_form inputFirst' placeholder='First Name' />
                <p className="error">{ErrFirst_Name}</p>
              </div>
              <div className="input_two_care">
                <input onChange={(e) => { setLast_Nmae(e.target.value) }} type="text" className='inputs_form inputLast' placeholder='Last Name' />
                <p className="error">{ErrLast_Nmae}</p>
              </div>
            </div>




            <div className="input_holdeer">
              <div className="input_one_Care">
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" className='inputs_form inputFirst' placeholder='Email' />
                <p className="error">{ErrEmail}</p>
              </div>
              <div className="input_two_care">
                <input onChange={(e) => { setphone_number(e.target.value) }} type="number" className='inputs_form inputLast' placeholder='Phone Number' />
                <p className="error">{Errphone_number}</p>
              </div>
            </div>


            <div className="input_holder">
              <input onChange={(e) => { setAddress(e.target.value) }} type="Address" className='inputs_form ' placeholder='Address' />
              <p className="error">{ErrAddress}</p>
            </div>



            <div className="address_controler">
              <div className="conutry_controller">
                <select name="" className='inputs_form countryselect' id="">
                  <option value="">Nigeria</option>
                </select>
              </div>

              <div className="state_controler selectstet">
                <select onChange={(e) => { setState_country(e.target.value) }} className='inputs_form ' name="" id="">
                  <option value="">Select State</option>
                  {StateList.map((sta) => {
                    return <option key={sta} value={sta}>{sta}</option>
                  })}
                </select>
                <p className="error">{ErrState_country}</p>


              </div>
              <div className="city_control">
                <input onChange={(e) => { setCity_country(e.target.value) }} type="text" className='inputs_form' placeholder='City' />
                <p className="error">{ErrCity_country}</p>

              </div>

            </div>

            {props.GiveFrom == true ? <div className="input_holder">
              <input onChange={(e) => { setAMoutToGive(e.target.value) }} type="number" className='inputs_form ' placeholder='Amout to give in Naria' />
              <p className="error">{ErrAMoutToGive}</p>
            </div> : ""}

            {/* props.GiveFrom
            props.appleFrom */}

            {props.appleFrom == true ? <div className="nonte_add">
              <h5>Add receiving Card/Account</h5>
              <p> <span className='span_note'>Please Note:</span> Any account or card link to this form will be the one that will funded,and for fast verification,to change write to us </p>
            </div> : ""}


            {props.appleFrom == true ? <div className="input_holdeer">
              <div className="input_one_Care">

                <select onChange={(e) => {
                  setbankSelected(e.target.value)
                  setbankseem(true)
                }} className='inputs_form bankselect' name="" id="">
                  <option value="">Select Card Issued Bank</option>
                  {Date.map((e) => {
                    return <option key={e.name} value={e.code}>{e.name}</option>

                  })}
                </select>
                <p className="error">{ErrbankSelected}</p>
              </div>
              <div className="input_two_care">
                <input type="text" className='inputs_form inputLast' placeholder='Breach Address (Optional)' />
                <p className="error"></p>
              </div>
            </div> : ''}

            {props.appleFrom == true ? <div className="comment_section">
              <textarea placeholder='Your problem Or reason For Help (Opitional)' className='inputs_form comment_se' name="" id="" cols="30" rows="10"></textarea>
            </div> : ""}
            {props.GiveFrom ? <div className="comment_section">
              <textarea placeholder='Share with how you feel in giving,You are blessed (Opitional)' className='inputs_form comment_se' name="" id="" cols="30" rows="10"></textarea>
            </div> : ""}


            <div className="butto_go">
              {bankseem ?
                <p className="note_one_bank_fess">
                  <span className='span_note'>Note:</span> Your Selected  Bank charges a fee of #{bankSelected} for card linking for receiving payment
                </p> : ""}

              {props.appleFrom == true ? <button className='inputs_form withbtn buttton_submit'
                onClick={(e) => {
                  e.preventDefault()
                  Submit_applications()
                }}>Submit and Add Card</button>:""}


              {props.GiveFrom ? <button className='inputs_form withbtn buttton_submit'
                onClick={(e) => {
                  e.preventDefault()
                  Submit_Give()
                }}>Proceed</button>:""}


            </div>
            <p className='error general_err'>{Errgeneral}</p>
          </form>

        </div>
      </div>
      {isokgo ?
        <Loading on={onbeforeprint} /> : ""
      }    </div>
  )
}

export default Form
