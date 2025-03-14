<script lang="ts">
    export let consultType: string = "";
    export let icon: string = "";
    
    const getLabel = (type: string) => {
      switch(type) {
        case "https://yourside.com/img/icons/consult-paid.png": return "Paid Consult";
        case "https://yourside.com/img/icons/consult-noCost.png": return "No-Cost Consult";
        case "https://yourside.com/img/icons/consult-video.png": return "Video Consult";
        case "https://yourside.com/img/icons/consult-phone.png": return "Phone Consult";
        case "https://yourside.com/img/icons/voice-text.png": return "Voice/Text";
        case "https://yourside.com/img/icons/voice-only.png": return "Voice Calls Only";
        default: return "";
      }
    };
    
    const getColor = (type: string) => {
      if (type.includes("paid")) return "bg-blue-500";
      if (type.includes("noCost")) return "bg-red-500";
      if (type.includes("video")) return "bg-indigo-500";
      if (type.includes("phone")) return "bg-purple-400";
      if (type.includes("voice-text")) return "bg-yellow-500";
      if (type.includes("voice-only")) return "bg-blue-400";
      return "bg-gray-500";
    };
    
    const getIcon = (type: string) => {
      if (type.includes("paid")) return "💰";
      if (type.includes("noCost")) return "🆓";
      if (type.includes("video")) return "📹";
      if (type.includes("phone")) return "📱";
      if (type.includes("voice-text")) return "💬";
      if (type.includes("voice-only")) return "🔊";
      return "ℹ️";
    };
    
    const label = getLabel(consultType);
    const colorClass = getColor(consultType);
    const iconText = getIcon(consultType);
  </script>
  
  {#if consultType}
    <div class="inline-flex items-center rounded px-2 py-1 text-sm text-white mr-2 mb-2 {colorClass}">
      <span class="mr-1">{iconText}</span>
      <span>{label}</span>
    </div>
  {/if}