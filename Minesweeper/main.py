import pygame
import time
import random

display_width = 500
display_height = 600

black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)

class button():
    def __init__(self, color, x,y,width,height, count):
        self.color = color
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.count = count

    def draw(self,win,outline=None):
        #Call this method to draw the button on the screen
        if outline:
            pygame.draw.rect(win, outline, (self.x,self.y,self.width,self.height),0)
            pygame.draw.rect(win, self.color, (self.x+3,self.y+3,self.width-7,self.height-7),0)

        else:
            pygame.draw.rect(win, self.color, (self.x,self.y,self.width,self.height),0)
            
        

    def isOver(self, pos):
        #Pos is the mouse position or a tuple of (x,y) coordinates
        if pos[0] > self.x and pos[0] < self.x + self.width:
            if pos[1] > self.y and pos[1] < self.y + self.height:
                return True
            
        return False

pygame.init()
gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption('Sweeper of Bombs')
clock = pygame.time.Clock()


def game_loop():
    gameExit = False
    while not gameExit:
        pos = pygame.mouse.get_pos()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

            if event.type == pygame.MOUSEBUTTONDOWN:
                if butt.isOver(pos):
                    print("Pressed")

        gameDisplay.fill(black)
        pygame.draw.rect(gameDisplay, white, [0 , 100 , display_width,  display_height])

        butt = button((green), 0, 100, 50, 50, 0)
        butt.draw(gameDisplay, blue)
        pygame.display.update()
        clock.tick(120)

game_loop()
pygame.quit()
quit()

                
