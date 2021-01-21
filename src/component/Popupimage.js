import React,{useState} from "react";
import {motion,AnimatePresence} from "framer-motion"
import useOnclickOutside from 'react-cool-onclickoutside'
import './Moodal.css'

const backdrop = {
    visible:{opacity: 1},
    hidden:{opacity: 0}
}
const modal={
    hidden:{y:'-100vh',opacity:0},
    visible:{y:'150px',opacity:1,zIndex:'100',transition:{delay:0.5}}
}
function Popupimage() {
    const [showModal,setShowModal] = useState(false)

      const onCloseModal = () => {
        setShowModal(false);
      };
      const clickshow = ()=>{
        setShowModal(!showModal);
      }
 
    const ref = useOnclickOutside(()=>{
        onCloseModal();
    })

    return (
        <AnimatePresence exitBeforeEnter>
          <button className='btn' onClick={clickshow}>Orginal Image</button>
            {
                showModal && (
                    <motion.div className="backdrop"
                       variants={backdrop}
                       initial='hidden'
                       animate='visible'
                       exit='hidden'>
                        <motion.div className="modal"
                        variants={modal}
                        onClose={onCloseModal}
                        ref={ref}
                        >
                        <div className='imgDiv'>
                            <img src='https://i.pinimg.com/736x/1f/b3/8e/1fb38ea391f7d125723ba0180abfed00--james-lee-cat-doll.jpg' alt=''/>
                        </div>
                        </motion.div>
                    </motion.div>
        
                )
            }
        </AnimatePresence>
    )
}
export default Popupimage
