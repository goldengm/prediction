<script>
import { ref } from "vue";

const useDisclosure = () => {
  const isOpen = ref(false);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    isOpen.value = !isOpen.value;
  };

  return { isOpen, onClose, onOpen, onToggle };
};

export default {
  name: "useDisclosure",
  setup() {
    const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
    return { isOpen, onClose, onOpen, onToggle };
  },
};
</script>





