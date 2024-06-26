import { PieChart } from 'react-minimal-pie-chart';
const PagesToRead = () => {
    return (
        <div className=''>
            <PieChart 
                data={[ 
                    { title: 'One', value: 20, color: '#E38627' },
                    { title: 'Two', value: 20, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />;
        </div>
    );
};

export default PagesToRead;