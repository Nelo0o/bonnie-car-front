
import { useNavigation } from 'next/navigation'; // Importer useNavigation à la place de useRouter

export default function MotoPage() {
  const navigation = useNavigation(); // Utiliser useNavigation à la place de useRouter
  
  return (
     <div>
       <h1>Product Details</h1>
       {/* Votre contenu de page */}
     </div>
  );
}