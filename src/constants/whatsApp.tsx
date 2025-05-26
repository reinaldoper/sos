



const whatsappLink = (phone: string, message: string) => {
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
};


export { whatsappLink };
