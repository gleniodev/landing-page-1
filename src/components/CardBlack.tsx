
type Props = {
    textCard: string
}
export function Card({textCard} : Props) {
    return(
        <div className=" w-[300px] h-[312px]  bg-img_bg_card bg-no-repeat bg-center bg-auto rounded-3xl flex justify-center items-center p-6 lg:w-[400px] lg:h-[412px]">
            <h2 className=" text-[28px] lg:text-[38px] text-white first-letter:capitalize text-center font-semibold">
                {textCard}
            </h2>
        </div>
    )

}