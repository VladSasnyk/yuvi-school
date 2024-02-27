/* eslint-disable react/prop-types */



import { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
// import gsap from "gsap";


const PriceInfo = props => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="flex flex-col items-center justify-center gap-16 mt-10" id={props.id}>
            <Button onClick={openModal}>
                <h2 className="text-white text-3xl text-center cursor-pointer max-sm:text-lg">
                    Як відбувається оплата?
                </h2>
            </Button>

            {modalIsOpen && <Modal onClose={closeModal}>
                <div className='flex flex-col gap-6 items-center justify-center p-6 max-sm:p-1' id='priceInfo'>
                    <div className="text-xl flex flex-col gap-4 max-sm:text-sm">
                        <p>
                            Перший урок оплачується окремо перед заняттям. Якщо вам сподобалось навчання, то надалі оплата відбувається пакетами.

                        </p>
                        <p>
                            Оплата індивідуального / парного навчання - 4/8 занять, а оплата групового навчання -  8 занять.
                        </p>
                        <p>
                            Щодо політики скасувань та переносів уроків:
                        </p>

                        <p>
                            Перенести заняття можна як мінімум за <span className="font-bold">2 години</span> до початку, попередивши про це викладача у спільному чаті. Вчитель запропонує вам вільні дні та години для перенесення заняття.
                            <p>Скасувати урок можна як мінімум за <span className="font-bold">6 годин</span> до початку.</p>
                            <p>
                                Радимо уникати скасування уроків, оскільки це може вплинути на результати вашого навчання.
                            </p>
                            У випадку, якщо ви не повідомили викладача про відсутність на занятті, такий урок буде вважатись проведеним і списаним з вашого балансу.
                        </p>
                        <p>
                            Дякуємо за розуміння!
                        </p>


                    </div>
                    <Button onClick={closeModal} className='text-white max-sm:w-2/3'>Закрити</Button>
                </div>

            </Modal>}
        </div >
    )
}

export default PriceInfo;