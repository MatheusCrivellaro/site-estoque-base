const useValid = () => {

    const validCPF = (cpf: string): boolean => {
        cpf = cpf.replace(/[^\d]/g, '');
        if (cpf.length !== 11) return false;
        if (/^(\d)\1+$/.test(cpf)) return false;
        let sum = 0;
        let remainder: number;
        for (let i = 1; i <= 9; i++)
            sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.substring(9, 10))) return false;
        sum = 0;
        for (let i = 1; i <= 10; i++)
            sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        return remainder === parseInt(cpf.substring(10, 11));
    };

    const validEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    const validDate = (dateString: string): boolean => {
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateRegex.test(dateString))
            return false;
        const [day, month, year] = dateString.split('/').map(Number);
        const date = new Date(year, month - 1, day);
        return (
            date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day
        );
    };

    const validPhone = (phone: string): boolean => {
        const cleanedPhone = phone.replace(/[^\d]/g, '');
        if (cleanedPhone.length !== 10 && cleanedPhone.length !== 11) {
            return false;
        }
        const ddd = parseInt(cleanedPhone.substring(0, 2));
        if (ddd < 1 || ddd > 99)
            return false;
        return !(cleanedPhone.length === 11 && cleanedPhone[2] !== '9');


    };

    return {
        validDate,
        validEmail,
        validCPF,
        validPhone
    }
}

export default useValid
