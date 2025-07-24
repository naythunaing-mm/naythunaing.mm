import SectionTitle from "../components/SectionTitle";
import useTermAndCondition from "../store/useTermAndCondition";
import TermAndConditionCard from "../components/TermAndConditionCard";

const TermAndCondition = () => {
    const { title, rules } = useTermAndCondition();
    return (<>
        <div className="py-16  px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            {
                rules.map((rule) =>
                    <TermAndConditionCard key={rule.id} title={rule.title} description={rule.description} />
                )
            }
        </div>
    </>)
}
export default TermAndCondition