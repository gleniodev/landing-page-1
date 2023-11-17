
type Props = {
    textCard: string
}
export function Card({textCard} : Props) {
    return(
        <div className=" w-[400px] h-[412px] bg-img_bg_card bg-no-repeat bg-center bg-auto rounded-3xl flex justify-center items-center p-6">
            <h2 className=" text-[38px] text-white first-letter:capitalize text-center font-semibold">
                {textCard}
            </h2>
        </div>
    )

}