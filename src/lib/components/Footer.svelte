<script lang="ts">
    const currentYear = new Date().getFullYear();
  </script>
  
  <footer class="bg-gray-100 border-t border-gray-300 py-6 mt-8">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-4 md:mb-0">
          <h3 class="text-lg font-medium mb-2">YourSide</h3>
          <p class="text-gray-600 text-sm">
            Connecting people with the right legal help.
          </p>
        </div>
        
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h4 class="text-sm font-medium mb-2">Quick Links</h4>
            <ul class="text-sm text-gray-600">
              <li class="mb-1"><a href="/" class="hover:text-blue-600">Home</a></li>
              <li class="mb-1"><a href="/about" class="hover:text-blue-600">About</a></li>
              <li class="mb-1"><a href="/contact" class="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-medium mb-2">Legal</h4>
            <ul class="text-sm text-gray-600">
              <li class="mb-1"><a href="/privacy" class="hover:text-blue-600">Privacy Policy</a></li>
              <li class="mb-1"><a href="/terms" class="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
        &copy; {currentYear} YourSide LLC. All rights reserved.
      </div>
    </div>
  </footer>